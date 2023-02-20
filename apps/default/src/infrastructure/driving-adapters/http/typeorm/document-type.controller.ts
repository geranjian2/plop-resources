import { Controller, Get } from '@nestjs/common'
import { CreateDocumentTypeUseCase } from 'apps/default/src/application/uses-cases/document-type/create-document-type.usecase'


@Controller(document-type)
export class DocumentTypeController {
  constructor(
    private readonly createDocumentTypeUseCase: CreateDocumentTypeUseCase,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    //return this.createDocumentTypeUseCase.create(createUserDto);
  }

  @Get()
  async findAll() {
    //return this.findAllDocumentTypeUseCase.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    //return this.findOneDocumentTypeUseCase.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    //return this.updateDocumentTypeUseCase.update(+id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    //return this.removeDocumentTypeUseCase.remove(+id);
  }

}