import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmpleadoEntity } from './entities/empleado.entity';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';


@Injectable()
export class EmpleadoService {

  constructor(
    @InjectRepository(EmpleadoEntity)
    private empleadoRepository: Repository<EmpleadoEntity>,
  ) {}

  async create(createEmpleadoDto: CreateEmpleadoDto) {
    const empleado = this.empleadoRepository.create(createEmpleadoDto);
    return await this.empleadoRepository.save(empleado);
  }

  createzz(createempleadoDto: CreateEmpleadoDto) {
    return 'This action adds a new empleado';
  }

  findAll() {
    return `This action returns all empleados`;
  }

  findOne(id: number) {
    return `This action returns a #${id} empleado`;
  }

  update(id: number, UpdateEmpleadoDto: UpdateEmpleadoDto) {
    return `This action updates a #${id} empleado`;
  }

  remove(id: number) {
    return `This action removes a #${id} empleado`;
  }
}

