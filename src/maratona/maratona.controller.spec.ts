import { Test, TestingModule } from '@nestjs/testing';
import { MaratonaController } from './maratona.controller';
import { MaratonaService } from './maratona.service';

describe('MaratonaController', () => {
  let maratonaController: MaratonaController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MaratonaController],
      providers: [MaratonaService],
    }).compile();

    maratonaController = app.get<MaratonaController>(MaratonaController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(maratonaController.index()).toBe('Hello World!');
    });
  });
});
