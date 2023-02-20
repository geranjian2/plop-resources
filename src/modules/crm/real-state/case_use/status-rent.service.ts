export class CreateStatusRentService {}

import { Injectable } from '@nestjs/common';
import { StatusRentEntity } from '../entity/StatusRentEntity';

@Injectable()
export class StatusRentService {
  constructor(
    @InjectRepository(StatusRentEntity)
    private readonly documentSupport: Repository<StatusRentEntity>,) {}
  async login(user: any) {
    const { id, ...rest } = user;
    const payload = { sub: id };

    return {
      ...rest,
      accessToken: this.jwtService.sign(payload),
    };
  }
}
