import { Controller, Get } from '@nestjs/common'
import { CreateUserUseCase } from 'apps/default/src/application/uses-cases/user/create-user.usecase'


@Controller(user)
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    //return this.createUserUseCase.create(createUserDto);
  }

  @Get()
  async findAll() {
    //return this.findAllUserUseCase.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    //return this.findOneUserUseCase.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    //return this.updateUserUseCase.update(+id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    //return this.removeUserUseCase.remove(+id);
  }

}