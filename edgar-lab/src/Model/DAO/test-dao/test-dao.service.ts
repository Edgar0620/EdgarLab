import { Injectable } from '@nestjs/common';
import { TestModel } from 'src/Model/DTO/testModel.model';

@Injectable()
export class TestDaoService {
    private tests: TestModel[] = [];

    add(title: string) {
        const now = new Date().toString();
        const newTest = new TestModel(now, title);
        this.tests.push(newTest);
        return now;
    }

    get() {
        return [...this.tests];
    }

}
