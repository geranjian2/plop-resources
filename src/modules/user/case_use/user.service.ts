export class CreateUserService {}

import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entity/UserEntity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly documentSupport: Repository<UserEntity>,) {}
  async login(user: any) {
    const { id, ...rest } = user;
    const payload = { sub: id };

    return {
      ...rest,
      accessToken: this.jwtService.sign(payload),
    };
  }
}
