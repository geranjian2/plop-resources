import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserModel } from 'apps/user/src/domain/entities'
import { IUserRepository } from 'apps/user/src/domain/repositories'
import { UserEntity } from 'libs/entities/entity'
import { Repository } from 'typeorm'

@Injectable()
export class UserRepositoryTypeOrm implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity )
    private readonly userRepository: Repository<UserEntity >,
  ) {}
  async save(user: UserModel ): Promise<UserModel > {
    return user
  }
  getAll: () => Promise<UserModel[]>
  getById: (userId: string) => Promise<UserModel>
  delete: (user: UserModel ) => Promise<string>
  update: (user: UserModel ) => Promise<UserModel >
}
