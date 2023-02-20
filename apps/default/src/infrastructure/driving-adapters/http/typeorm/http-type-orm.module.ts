import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserController } from './type-documents.controller'
import { UserEntity } from 'libs/entities/entity'
import { UserRepositoryTypeOrm } from 'apps/default/src/infrastructure/implementations/typeorm/user/user-repository-typeorm
import { CreateUserUseCase } from 'apps/default/src/application/uses-cases/user/create-user.usecase'

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    { provide: 'UserRepository', useClass: UserRepositoryTypeOrm },
  ],
})
export class HttpTypeOrmModule {}