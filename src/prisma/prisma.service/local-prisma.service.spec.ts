import { Test, TestingModule } from '@nestjs/testing';
import { LocalPrismaService } from './local-prisma.service';
import { ConfigModule } from '@nestjs/config';

describe('LocalPrismaService', () => {
  let service: LocalPrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true })],
      providers: [LocalPrismaService],
    }).compile();

    service = module.get<LocalPrismaService>(LocalPrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});