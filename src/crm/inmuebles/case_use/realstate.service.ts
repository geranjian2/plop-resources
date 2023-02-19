export class CreateRealstateService {}

import { Injectable } from '@nestjs/common';
import { RealstateEntity } from '../entity/RealstateEntity';

@Injectable()
export class RealstateService {
  constructor(
    @InjectRepository(RealstateEntity)
    private readonly documentSupport: Repository<RealstateEntity>,) {}
  async login(user: any) {
    const { id, ...rest } = user;
    const payload = { sub: id };

    return {
      ...rest,
      accessToken: this.jwtService.sign(payload),
    };
  }
}
