import { Injectable } from '@nestjs/common';
import { PrismaService } from './prismaService';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async getHello() {
    const res = await this.prisma.user.create({
      data: {
        email: 'some email1',
        name: 'some name',
      },
    });
    console.log(res);
    return res;
  }
}
