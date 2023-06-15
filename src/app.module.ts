import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserMongoModule } from './modules/userMongo/userMongo.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://yourServer:port', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    UserMongoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
