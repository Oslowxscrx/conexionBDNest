export {Entity} from "typeorm"
import { EmpleadoEntity } from "src/empleados/entities/empleado.entity";
import { BeforeInsert, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ActivoEntity {
    @PrimaryGeneratedColumn('increment')
    id:number;
    @Column('numeric', {
        name: 'codigo',
        nullable: false,
        comment: 'codigo insumo'
    })
    codigo: number

    @Column('varchar', {
        name: 'nombre',
        nullable: false,
        comment: 'nombre Activo'
    })
    nombreActivo: string

    @Column('varchar', {
        name: 'descripcion',
        nullable: true,
        comment: 'descripcion del activo'
    })
    descripcion: string

    @Column('numeric', {
        name: 'vida util',
        nullable: false,
        comment: 'vida util del activo'
    })
    vidaUtil: number  

    @ManyToOne(() => EmpleadoEntity, empleadoId => empleadoId.activos)
    empleadoId: EmpleadoEntity;

   

}