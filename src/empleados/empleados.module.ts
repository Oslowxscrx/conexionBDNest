import { Module } from '@nestjs/common';
import { EmpleadoService } from './empleados.service';
import { EmpleadosController } from './empleados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpleadoEntity } from './entities/empleado.entity';
import { ActivoEntity } from 'src/empleados/entities/activo.entity';

@Module({
  controllers: [EmpleadosController],
  providers: [EmpleadoService],
  imports: [
    TypeOrmModule.forFeature([EmpleadoEntity, ActivoEntity])
  ]
})
export class EmpleadosModule {}
