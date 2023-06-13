import { Injectable } from '@nestjs/common';
import { UserItem } from './user.controller';

@Injectable()
export class UserService {
  private userList = []; // 没有数据库，暂时通过该方式定义数据

  getUserList(): UserItem[] {
    return this.userList;
  }

  addUser(userData: UserItem): UserItem[] {
    this.userList.push(userData);
    return this.userList;
  }

  getUserDetail(targetUserId: string): UserItem {
    const targetUserArray = this.userList.filter(
      (item) => item.id === parseInt(targetUserId),
    );
    return targetUserArray[0] || {};
  }

  updateUser(userData: UserItem): UserItem[] {
    this.userList = this.userList.map((item) => {
      if (item.id === userData.id) {
        return userData;
      }
      return item;
    });
    return this.userList;
  }

  deleteUser(deleteId): UserItem[] {
    this.userList = this.userList.filter(
      (item) => item.id !== parseInt(deleteId),
    );
    return this.userList;
  }
}
