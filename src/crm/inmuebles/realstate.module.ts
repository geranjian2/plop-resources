import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notacredito } from './entity/Notacredito';
import { Facade } from './facade/facade';
import { RealstateService } from './realstate.service';
import { RealstateController } from './realstate.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Notacredito])],
  controllers: [RealstateController],
  providers: [RealstateService]
})
export class RealstateModule  {}
