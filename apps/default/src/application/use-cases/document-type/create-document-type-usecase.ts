

import { Inject, Injectable } from '@nestjs/common'
import { DocumentTypeModel } from 'apps/document-type/src/domain/entities'
import { IDocumentTypeRepository } from 'apps/document-type/src/domain/repositories'

@Injectable()
export class CreateDocumentTypeUseCase {
  constructor(
    @Inject('DocumentTypeRepository') private userRepository: IDocumentTypeRepository,
  ) {}
  async run():Promise<any> {
    
    }
}
