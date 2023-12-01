import { Module } from '@nestjs/common';
import { ActivosService } from './activos.service';
import { ActivosController } from './activos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivoEntity } from './entities/activo.entity';

@Module({
  controllers: [ActivosController],
  providers: [ActivosService],
  imports: [
    TypeOrmModule.forFeature([ActivoEntity])
  ]
})
export class ActivosModule {}
