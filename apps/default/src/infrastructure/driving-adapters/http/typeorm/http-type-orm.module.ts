import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserAdminController } from './type-documents.controller'
import { UserAdminEntity } from 'libs/entities/entity'
import { UserAdminRepositoryTypeOrm } from 'apps/default/src/infrastructure/implementations/typeorm/user-admin/user-admin-repository-typeorm
import { CreateUserAdminUseCase } from 'apps/default/src/application/uses-cases/user-admin/create-user-admin.usecase'

@Module({
  imports: [TypeOrmModule.forFeature([UserAdminEntity])],
  controllers: [UserAdminController],
  providers: [
    CreateUserAdminUseCase,
    { provide: 'UserAdminRepository', useClass: UserAdminRepositoryTypeOrm },
  ],
})
export class HttpTypeOrmModule {}