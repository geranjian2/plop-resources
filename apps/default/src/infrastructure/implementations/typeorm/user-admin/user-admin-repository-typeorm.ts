import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserAdminModel } from 'apps/user-admin/src/domain/entities'
import { UserAdminRepository } from 'apps/user-admin/src/domain/repositories'
import { UserAdminEntity } from 'libs/entities/entity'
import { Repository } from 'typeorm'

@Injectable()
export class UserAdminRepositoryTypeOrm implements UserAdminRepository {
  constructor(
    @InjectRepository(UserAdminEntity )
    private readonly userRepository: Repository<UserAdminEntity >,
  ) {}
  async save(user: UserAdminModel ): Promise<UserAdminModel > {
    return user
  }
  getAll: () => Promise<UserAdminModel[]>
  getById: (userId: string) => Promise<UserAdminModel>
  delete: (user: UserAdminModel ) => Promise<string>
  update: (user: UserAdminModel ) => Promise<UserAdminModel >
}
