export class CreateBillingService {}

import { Injectable } from '@nestjs/common';
import { BillingEntity } from '../entity/BillingEntity';

@Injectable()
export class BillingService {
  constructor(
    @InjectRepository(BillingEntity)
    private readonly documentSupport: Repository<BillingEntity>,) {}
  async login(user: any) {
    const { id, ...rest } = user;
    const payload = { sub: id };

    return {
      ...rest,
      accessToken: this.jwtService.sign(payload),
    };
  }
}
