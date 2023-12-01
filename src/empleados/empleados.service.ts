import { InjectRepository } from "@nestjs/typeorm";
import { UpdateEmpleadoDto } from "./dto/update-empleado.dto";
import { Injectable } from "@nestjs/common";
import { EmpleadoEntity } from "./entities/empleado.entity";
import { CreateEmpleadoDto } from "./dto/create-empleado.dto";
import { Repository } from "typeorm";

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

  async findAll() {
    return await this.empleadoRepository.find(); // Devuelve todos los empleados
  }

  async findOne(id:number) {
    const empleadop = await this.empleadoRepository.findOne({ where: {id} });

    return empleadop;
  }

  async update(id: number, updateEmpleadoDto: UpdateEmpleadoDto): Promise<EmpleadoEntity> {
    const empleado = await this.empleadoRepository.findOne({ where: { id } });
    if (!empleado) {
      // Manejo de error si el jugador no existe
      throw new Error('El jugador con ID ${id} no fue encontrado');
    }

    // Actualizar el jugador con los datos del DTO
    this.empleadoRepository.merge(empleado, updateEmpleadoDto);
    return await this.empleadoRepository.save(empleado);
  }

  async delete(id: number) {
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