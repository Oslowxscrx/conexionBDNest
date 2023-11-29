import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator"

export class CreateEmpleadoDto {

    @IsString()
    @IsNotEmpty()
    nombre: string
    @IsString()
    @IsOptional()
    apellido: string
    @IsNumber()
    @IsPositive()
    cedula: number
    @IsEmail()
    @IsString()
    email: string
}
