import { InjectRepository } from "@nestjs/typeorm";
import { UpdateEmpleadoDto } from "./dto/update-empleado.dto";
import { Injectable } from "@nestjs/common";
import { EmpleadoEntity } from "./entities/empleado.entity";
import { EntityManager, Repository } from "typeorm";
import { CreateEmpleadoDto } from "./dto/create-empleado.dto";

@Injectable()
export class EmpleadoService {

  constructor(
    @InjectRepository(EmpleadoEntity)
    private empleadoRepository: Repository<EmpleadoEntity>,
    private entityManager: EntityManager,
  ) {}

  async create(createEmpleadoDto: CreateEmpleadoDto) {
    const empleado = this.empleadoRepository.create(createEmpleadoDto);
    return await this.empleadoRepository.save(empleado);
  }

  async findAll() {
    return await this.empleadoRepository.find(); // Devuelve todos los empleados
  }

  async findOne(id:string) {
    const empleadop = await this.empleadoRepository.findOne({ where: {id} });

    return empleadop;
  }

  async update(id, updateEmpleadoDto: UpdateEmpleadoDto) {
    const empleado = await this.empleadoRepository.findOne(id);
    if (!empleado) {
      throw new Error(`Empleado con ID ${id} no encontrado`);
    }

    // Actualiza los campos del empleado con los datos del DTO
    Object.assign(empleado, updateEmpleadoDto);

    return await this.empleadoRepository.save(empleado);
  }

  async delete(id: string) {
    let empleado = await this.findOne(id);
    if(empleado){
      const empleados = this.empleadoRepository.delete({id});
      return "ya esta";
    }
    else{
      return "no existe";
    }
  }
  }