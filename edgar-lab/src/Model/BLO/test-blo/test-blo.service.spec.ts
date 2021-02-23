import { Test, TestingModule } from '@nestjs/testing';
import { TestBloService } from './test-blo.service';

describe('TestBloService', () => {
  let service: TestBloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestBloService],
    }).compile();

    service = module.get<TestBloService>(TestBloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
