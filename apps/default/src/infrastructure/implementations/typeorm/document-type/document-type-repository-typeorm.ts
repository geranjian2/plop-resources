import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DocumentTypeModel } from 'apps/document-type/src/domain/entities'
import { IDocumentTypeRepository } from 'apps/document-type/src/domain/repositories'
import { DocumentTypeEntity } from 'libs/entities/entity'
import { Repository } from 'typeorm'

@Injectable()
export class DocumentTypeRepositoryTypeOrm implements IDocumentTypeRepository {
  constructor(
    @InjectRepository(DocumentTypeEntity )
    private readonly userRepository: Repository<DocumentTypeEntity >,
  ) {}
  async save(user: DocumentTypeModel ): Promise<DocumentTypeModel > {
    return user
  }
  getAll: () => Promise<DocumentTypeModel[]>
  getById: (userId: string) => Promise<DocumentTypeModel>
  delete: (user: DocumentTypeModel ) => Promise<string>
  update: (user: DocumentTypeModel ) => Promise<DocumentTypeModel >
}
