import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
export const mongooseModuleConfig: MongooseModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    uri: configService.get('DATABASE_URL')
      ? configService.get('DATABASE_URL')
      : 'mongodb://recipesharing_user:recipesharing_password@localhost:27017/recipesharing?authSource=admin',
  }),
  inject: [ConfigService],
};
