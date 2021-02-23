import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestBloService } from 'src/Model/BLO/test-blo/test-blo.service';
import { TestDaoService } from 'src/Model/DAO/test-dao/test-dao.service';

@Module({
    controllers: [TestController],
    providers: [
        TestBloService,
        TestDaoService]
})
export class TestModule { }
