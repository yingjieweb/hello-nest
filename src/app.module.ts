import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserBaseModule } from './modules/userBase/userBase.module';
import { UserDtoModule } from './modules/userDto/userDto.module';
import { UserMongoModule } from './modules/userMongo/userMongo.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://yourServer:port', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    UserBaseModule,
    UserDtoModule,
    UserMongoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
