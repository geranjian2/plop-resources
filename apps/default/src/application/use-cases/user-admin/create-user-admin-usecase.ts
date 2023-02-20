

import { Inject, Injectable } from '@nestjs/common'
import { UserAdminModel } from 'apps/user-admin/src/domain/entities'
import { UserAdminRepository } from 'apps/user-admin/src/domain/repositories'

@Injectable()
export class CreateUserAdminUseCase {
  constructor(
    @Inject('UserAdminRepository') private userRepository: UserAdminRepository,
  ) {}
  async run():Promise<any> {
    
    }
}
