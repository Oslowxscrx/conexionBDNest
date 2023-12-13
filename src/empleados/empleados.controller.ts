import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { EmpleadoService } from "./empleados.service";
import { CreateEmpleadoDto } from "./dto/create-empleado.dto";
import { UpdateEmpleadoDto } from "./dto/update-empleado.dto";
import { PaginacionDto } from "src/common/dto/paginacion.dto";

@Controller('empleados')
export class EmpleadosController {
  constructor(private readonly empleadosService: EmpleadoService) {}

  @Post()
  async create(@Body() createEmpleadoDto: CreateEmpleadoDto) {
    return this.empleadosService.create(createEmpleadoDto);
  }

  @Get()
  findAll(@Query()paginacionDto: PaginacionDto) {
    return this.empleadosService.findAll(paginacionDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.empleadosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateJugadorDto: UpdateEmpleadoDto) {
    return this.empleadosService.update(id, updateJugadorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.empleadosService.delete(id);
  }
}
