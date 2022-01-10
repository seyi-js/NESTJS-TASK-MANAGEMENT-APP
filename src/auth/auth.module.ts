import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRespository } from './users.respository';

@Module({
  imports:[TypeOrmModule.forFeature([UserRespository])],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
