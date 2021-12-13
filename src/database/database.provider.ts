import { TypeOrmModule } from '@nestjs/typeorm';

export const DatabaseProvider = [
  TypeOrmModule.forRoot({
    ssl: false,
    type: 'postgres',
    host: 'localhost',
    username: 'safeway',
    password: '3131tes..',
    port: 5522,
    synchronize: false,
    entities: [__dirname + '../../modules/**/*.entity{.ts,.js}'],
  }),
];
