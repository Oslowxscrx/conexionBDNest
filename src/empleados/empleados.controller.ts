import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpleadoService } from './empleados.service';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { Repository } from 'typeorm';

@Controller('empleados')
export class EmpleadosController {
  constructor(private readonly empleadosService: EmpleadoService) {}

  @Post()
  async create(@Body() createEmpleadoDto: CreateEmpleadoDto) {
    return this.empleadosService.create(createEmpleadoDto);
  }

  // @Get()
  // findAll() {
  //   return this.empleadosService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empleadosService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEmpleadoDto: UpdateEmpleadoDto) {
  //   return this.empleadosService.update(+id, updateEmpleadoDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empleadosService.remove(+id);
  }
}
