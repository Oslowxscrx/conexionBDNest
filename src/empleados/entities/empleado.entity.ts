export {Entity} from "typeorm"
import { ActivoEntity } from "src/activos/entities/activo.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EmpleadoEntity {
    @PrimaryGeneratedColumn('increment')
    id:number;
    @Column('varchar', {
        name: 'nombre',
        nullable: false,
        comment: 'nombre empleado'
    })
    nombre: string

    @Column('varchar', {
        name: 'apellido',
        nullable: false,
        comment: 'apellido empleado'
    })
    apellido: string

    @Column('numeric', {
        name: 'cedula',
        nullable: true,
        comment: 'cedula empleado'
    })
    cedula: number

    @Column('varchar', {
        name: 'email',
        nullable: false,
        comment: 'email empleado'
    })
    email: string

    @OneToMany(() => ActivoEntity, activo => activo.empleadoId)
    activos:ActivoEntity[];
}
