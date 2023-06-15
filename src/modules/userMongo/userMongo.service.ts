import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserItem } from 'src/core/types/user';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserMongoService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getUserList(): Promise<UserDocument[]> {
    return this.userModel.find().exec();
  }

  async addUser(userData: UserItem): Promise<UserDocument> {
    const createdUser = new this.userModel(userData);
    return createdUser.save();
  }

  async getUserDetail(targetUserId: string): Promise<UserDocument | null> {
    return this.userModel.findById(targetUserId).exec();
  }

  async updateUser(userData: UserItem): Promise<UserDocument | null> {
    return this.userModel.findByIdAndUpdate(userData.id, userData).exec();
  }

  async deleteUser(deleteId): Promise<UserDocument | null> {
    return this.userModel.findByIdAndDelete(deleteId).exec();
  }
}
