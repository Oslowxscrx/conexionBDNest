import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpleadosModule } from './empleados/empleados.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivosModule } from './activos/activos.module';

@Module({
  imports: [
    EmpleadosModule, 
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities:true, //carge automaticamente las entidades
      synchronize:true //en produccion se debe poner falso
    }),
    ActivosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
