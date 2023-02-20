import { Controller, Get } from '@nestjs/common'
import { CreateUserAdminUseCase } from 'apps/default/src/application/uses-cases/user-admin/create-user-admin.usecase'


@Controller(user-admin)
export class UserAdminController {
  constructor(
    private readonly createUserAdminUseCase: CreateUserAdminUseCase,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    //return this.createUserAdminUseCase.create(createUserDto);
  }

  @Get()
  async findAll() {
    //return this.findAllUserAdminUseCase.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    //return this.findOneUserAdminUseCase.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    //return this.updateUserAdminUseCase.update(+id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    //return this.removeUserAdminUseCase.remove(+id);
  }

}