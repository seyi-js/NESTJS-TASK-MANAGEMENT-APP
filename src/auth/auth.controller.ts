import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth.credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async signUp(@Body() auth: AuthCredentialsDto) {
    return await this.authService.createUser(auth);
  }

  @Post('/login')
  async signIn(@Body() auth: AuthCredentialsDto) {
    return await this.authService.signIn(auth);
  }
}
