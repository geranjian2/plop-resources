import { type DocumentTypeModel } from '../models'
import { BaseRepository } from './base-repository'
export * from './document-type-repository'
export interface IDocumentTypeRepository extends IBaseRepository<DocumentTypeModel> {
  base?:string
}