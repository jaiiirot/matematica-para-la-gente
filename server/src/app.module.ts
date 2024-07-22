import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { CoursesModule } from './courses/courses.module';
import { UsersModule } from './users/users.module';
import { VideosModule } from './videos/videos.module';
import { CoursModule } from './cours/cours.module';
import { configOptions } from './config/env.options';

@Module({
  imports: [
    ConfigModule.forRoot(configOptions),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async(configService: ConfigService) => {
        const mongoCofig = configService.get('mongo');
        return {
          uri: mongoCofig.uri
        }
      },
    }),
    CoursModule,
    UsersModule,
    VideosModule,
    CoursesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
