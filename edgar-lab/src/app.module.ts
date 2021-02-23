import { Module } from '@nestjs/common';
import { TestModule } from './ApiController/test/test.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
