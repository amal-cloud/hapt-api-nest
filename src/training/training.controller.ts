import { Controller, Get } from '@nestjs/common';

@Controller('training')
export class TrainingController {
  @Get()
  getTraining(): string {
    return 'Training';
  }
}
