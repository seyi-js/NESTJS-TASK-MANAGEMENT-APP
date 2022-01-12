import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth.credentials.dto';
import { UserRespository } from './users.respository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JWtpayload } from './jwt.payload.inteface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRespository)
    private userRepository: UserRespository,
    private jwtService: JwtService,
  ) {}

  async createUser(auth: AuthCredentialsDto): Promise<void> {
    const { username, password } = auth;

    const salt = await bcrypt.genSalt();

    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.userRepository.create({
      username,
      password: hashedPassword,
    });

    try {
      await this.userRepository.save(user);
    } catch (error) {
      if (error.code == 23505)
        throw new ConflictException(null, 'username exists');

      throw new InternalServerErrorException();
    }
  }

  async signIn(auth: AuthCredentialsDto): Promise<string> {
    const { username, password } = auth;

    const user = await this.userRepository.findOne({ username });

    if (!user || !(await bcrypt.compare(password, user.password)))
      throw new BadRequestException(null, 'ivalid credentials supplied.');

    const payload: JWtpayload = { username };

    return await this.jwtService.sign(payload);
  }
}
