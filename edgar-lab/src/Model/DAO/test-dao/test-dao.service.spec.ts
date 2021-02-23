import { Test, TestingModule } from '@nestjs/testing';
import { TestDaoService } from './test-dao.service';

describe('TestDaoService', () => {
  let service: TestDaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestDaoService],
    }).compile();

    service = module.get<TestDaoService>(TestDaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
