import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRespository } from './users.respository';

@Injectable()
export class AuthService {
    constructor(
     @InjectRepository(UserRespository)   
     private userRepository:UserRespository
    ){}
}

