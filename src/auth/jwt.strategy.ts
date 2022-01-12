import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JWtpayload } from './jwt.payload.inteface';
import { User } from './user.entity';
import { UserRespository } from './users.respository';

@Injectable()
export class JWtstrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRespository)
    private userRepo: UserRespository,
  ) {
    super({
      secretOrKey: 'secret',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JWtpayload): Promise<User> {
    const { username } = payload;
    const user: User = await this.userRepo.findOne({ username });

    if (!user) throw new UnauthorizedException(null, 'not authorized.');

    return user;
  }
}
