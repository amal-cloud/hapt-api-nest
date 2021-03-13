import { Controller, Get } from '@nestjs/common';
import { LeadService } from './lead.service';

@Controller('lead')
export class LeadController {
  constructor(private readonly leadService: LeadService) {}

  @Get()
  getLead(): string {
    return this.leadService.getLead();
  }
}
