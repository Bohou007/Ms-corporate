import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CorporateModule } from './corporate/corporate.module';
import { UsersModule } from './users/users.module';
import { ApprouveProductsModule } from './approuve-products/approuve-products.module';
import { TauxModule } from './taux/taux.module';
import { DataSituationsModule } from './data-situations/data-situations.module';
import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';
import { AuthenticateTokenMiddleware } from './middlewares/authenticate-token/authenticate-token.middleware';
import { JsonMiddlewareMiddleware } from './middlewares/json-middleware/json-middleware.middleware';
import { ServicesApiExternes } from './common/services-api-externes/services-api-externes.service';
import { VieModule } from './insurance-core/vie/vie.module';

@Module({
  imports: [
    CorporateModule,
    UsersModule,
    ApprouveProductsModule,
    TauxModule,
    DataSituationsModule,
    CommonModule,
    AuthModule,
    VieModule,
  ],
  controllers: [AppController],
  providers: [AppService, ServicesApiExternes],
})
export class AppModule {
  //configure(consumer: MiddlewareConsumer) {
  // consumer
  //  .apply(AuthenticateTokenMiddleware)
  // .forRoutes({ path: '*', method: RequestMethod.ALL });
  //}
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JsonMiddlewareMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
