import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator"

export class CreateActivoDto {

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    codigo: number
    @IsString()
    @IsNotEmpty()
    nombreActivo: string
    @IsString()
    @IsOptional()
    descripcion: string
    @IsNumber()
    @IsPositive()
    vidaUtil: number

}