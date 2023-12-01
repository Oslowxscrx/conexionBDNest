import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivosService } from './activos.service';
import { CreateActivoDto } from './dto/create-activo.dto';
import { UpdateActivoDto } from './dto/update-activo.dto';

@Controller('activos')
export class ActivosController {
  constructor(private readonly activosService: ActivosService) {}

  @Post()
  async create(@Body() createActivoDto: CreateActivoDto) {
    return this.activosService.create(createActivoDto);
  }

  @Get()
  async findAll() {
    return this.activosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.activosService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateActivoDto: UpdateActivoDto) {
    return this.activosService.update(+id, updateActivoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.activosService.remove(+id);
  }
}
