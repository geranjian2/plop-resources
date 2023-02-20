import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserRepositoryTypeOrm } from './user/user-repository-typeorm'
import { UserEntity } from 'libs/entities/entity'

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserRepositoryTypeOrm],
  exports: [UserRepositoryTypeOrm],
})
export class TypeOrmRepositoryModule {}