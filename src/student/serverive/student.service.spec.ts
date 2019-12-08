import { Test, TestingModule } from '@nestjs/testing';
import { ServeriveService } from './student.service';

describe('ServeriveService', () => {
  let service: ServeriveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServeriveService],
    }).compile();

    service = module.get<ServeriveService>(ServeriveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
