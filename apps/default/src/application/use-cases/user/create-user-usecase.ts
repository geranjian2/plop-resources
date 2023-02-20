

import { Inject, Injectable } from '@nestjs/common'
import { UserModel } from 'apps/user/src/domain/entities'
import { IUserRepository } from 'apps/user/src/domain/repositories'

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('UserRepository') private userRepository: IUserRepository,
  ) {}
  async run():Promise<any> {
    
    }
}
