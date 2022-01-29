import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { getMetadataArgsStorage } from 'typeorm';

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    return {
      type: 'sqlite',
      database: 'db.sqlite',
      entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
      synchronize: true,
      keepConnectionAlive: true,
      logging: true,
    };

    // createConnection(options)
    //   .then((connection) => {
    //     Logger.log(`☁️  Database connected`, 'TypeORM', false);
    //   })
    //   .catch((err) => {
    //     Logger.error(`❌  Database connect error`, '', 'TypeORM', false);
    //   });
  }
}
