import { IsArray, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator"

export class CreateEmpleadoDto {

    @IsString({each: true})
    @IsNotEmpty()
    nombre?: string
    @IsString({each: true})
    @IsOptional()
    apellido?: string
    @IsNumber()
    @IsPositive()
    cedula?: number
    @IsEmail()
    @IsString({each: true})
    email?: string

    @IsString({each: true})
    @IsArray()
    @IsOptional()
    nombreActivo?: string[];
}
