import { Controller, Get, Param, Query } from '@nestjs/common';
import { Client } from './client.interface';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get(':id')
  getClient(@Param('id') id: string): Client {
    return this.clientService.getClient(id);
  }

  @Get()
  getClients(
    @Query('name') name?: string,
    @Query('gender') gender?: string,
  ): Client[] {
    return this.clientService.getClients(name, gender);
  }
}
