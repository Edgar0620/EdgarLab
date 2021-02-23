import { Injectable } from '@nestjs/common';
import { TestDaoService } from 'src/Model/DAO/test-dao/test-dao.service';
import { TestModel } from 'src/Model/DTO/testModel.model';

@Injectable()
export class TestBloService {

    constructor(
        private readonly testDaoService:TestDaoService
    ){}

    add(title:string){
        return this.testDaoService.add(title);
    }

    get(){
        return this.testDaoService.get();
    }
}
