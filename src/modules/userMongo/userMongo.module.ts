import { Module } from '@nestjs/common';
import { UserMongoController } from './userMongo.controller';
import { UserMongoService } from './userMongo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema, collection: 'user' },
    ]),
  ],
  controllers: [UserMongoController],
  providers: [UserMongoService],
})
export class UserMongoModule {}
