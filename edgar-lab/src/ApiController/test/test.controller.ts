import { Body, Controller, Get, Header, Post } from '@nestjs/common';
import { TestBloService } from 'src/Model/BLO/test-blo/test-blo.service';
import { OutApi } from 'src/Model/ViewModel/outApi.model';

@Controller('Test')
export class TestController {

    constructor(
        private readonly testBloService: TestBloService
    ) { }

    @Post()
    addProc(
        @Body() body: { title: string }
        //@Body('title') title: string
    ) {
        const id = this.testBloService.add(body.title);
        return new OutApi(200,id,"");
    }

    @Get()
    get(){
        return new OutApi(200,this.testBloService.get(),"");
    }
    

}
