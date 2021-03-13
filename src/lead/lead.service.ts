import { Injectable } from '@nestjs/common';

@Injectable()
export class LeadService {
  getLead(): string {
    return 'Lead';
  }
}
