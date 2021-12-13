import { Injectable } from '@nestjs/common';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userName: string, pass: string): Promise<User> {
    const user = await this.usersService.findByUserName(userName);
    const passwordsMatch = await bcrypt.compare(pass, user.password);
    if (user && passwordsMatch) {
      return {
        ...user,
        password: null,
      };
    }
    return null;
  }

  async login(user: { userName: string; userId: number }) {
    const payload = { userName: user.userName, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
