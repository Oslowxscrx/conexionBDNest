import { Injectable } from '@nestjs/common';
import { CreateActivoDto } from './dto/create-activo.dto';
import { UpdateActivoDto } from './dto/update-activo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ActivoEntity } from './entities/activo.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class ActivosService {

  constructor(
    @InjectRepository(ActivoEntity)
    private activoRepository: Repository<ActivoEntity>,
  ) {}
  
  async create(createActivoDto: CreateActivoDto) {
    const activo = this.activoRepository.create(createActivoDto);
    return await this.activoRepository.save(activo)
  }

  async findAll() {
    return `This action returns all activos`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} activo`;
  }

  async update(id: number, updateActivoDto: UpdateActivoDto) {
    return `This action updates a #${id} activo`;
  }

  async remove(id: number) {
    return `This action removes a #${id} activo`;
  }
}
