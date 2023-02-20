import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserAdminRepositoryTypeOrm } from './user-admin/user-admin-repository-typeorm'
import { UserAdminEntity } from 'libs/entities/entity'

@Module({
  imports: [TypeOrmModule.forFeature([UserAdminEntity])],
  providers: [UserAdminRepositoryTypeOrm],
  exports: [UserAdminRepositoryTypeOrm],
})
export class TypeOrmRepositoryModule {}