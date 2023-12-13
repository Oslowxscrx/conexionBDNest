import { InjectRepository } from "@nestjs/typeorm";
import { UpdateEmpleadoDto } from "./dto/update-empleado.dto";
import { Injectable, NotAcceptableException } from "@nestjs/common";
import { EmpleadoEntity } from "./entities/empleado.entity";
import { CreateEmpleadoDto } from "./dto/create-empleado.dto";
import { Repository } from "typeorm";
import { ActivoEntity } from "src/empleados/entities/activo.entity";
import { PaginacionDto } from "src/common/dto/paginacion.dto";

@Injectable()
export class EmpleadoService {

  constructor(
    @InjectRepository(EmpleadoEntity)
    private empleadoRepository: Repository<EmpleadoEntity>,
    @InjectRepository(ActivoEntity)
    private activosRepository: Repository<ActivoEntity>,
  ) {}

  async create(createEmpleadoDto: CreateEmpleadoDto) {
    try{
      const {nombreActivo=[], ...empleadoDetalles} = createEmpleadoDto
    const empleado = this.empleadoRepository.create(

      {
        ...empleadoDetalles,
        nombreActivo: nombreActivo.map(nombre => this.activosRepository.create({
          codigo: 1,
          nombreActivo: nombre,
          descripcion: 'Descripción por defecto',
          vidaUtil: 0,
        }))
      }
    );
    await this.empleadoRepository.save(empleado);
    return {...empleado, nombreActivo}
  } catch (error){
    console.log(error)
    throw new Error("No se pudo realizar el ingreso a la base")
  }
}

  findAll(paginacionDto: PaginacionDto) {
    const { limit= 10, offset=1 } = paginacionDto
    return this.empleadoRepository.find({
      take: limit,
      skip: offset,
      relations: {
        nombreActivo: true
      }
    }); // Devuelve todos los empleados
  }

  async findOne(id:number) {
    const empleados = await this.empleadoRepository.findOneBy({ id });

    if(!empleados)
    throw new NotAcceptableException(id)
    return empleados;
  }

  async update(id: number, updateEmpleadoDto: UpdateEmpleadoDto) {
    const empleados = await this.empleadoRepository.preload({
      id: id,
      ...updateEmpleadoDto,
      nombreActivo: []
    })
    if(!empleados)
    throw new NotAcceptableException('no se puedo actualizar');
  await this.empleadoRepository.save(empleados);
  return empleados

    

    // Actualizar el jugador con los datos del DTO
    
  }

  async delete(id: number) {
    const empleados = await this.findOne(id);
    this.empleadoRepository.delete(empleados)
  }
}