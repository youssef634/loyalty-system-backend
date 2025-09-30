import { Test, TestingModule } from '@nestjs/testing';
import { CloudPrismaService } from './cloud-prisma.service';
import { ConfigModule } from '@nestjs/config';

describe('CloudPrismaService', () => {
  let service: CloudPrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true })],
      providers: [CloudPrismaService],
    }).compile();

    service = module.get<CloudPrismaService>(CloudPrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
