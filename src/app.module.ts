import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HistoryModule } from './history/history.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { History } from './history/entities/history.entity';
import { StandardModule } from './standard/standard.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './app.sqlite',
      entities: [History],
      synchronize: true,
    }),
    HistoryModule,
    StandardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
