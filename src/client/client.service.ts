import { Injectable, UnsupportedMediaTypeException } from '@nestjs/common';
import { Client, UidType } from './client.interface';

@Injectable()
export class ClientService {
  getClient(): Client {
    const c1: Client = {
      fullname: 'afef',
      address: {
        city: 'Sousse',
        street: 'Roundpoint Panorama',
        zip: 4033,
      },
      phone: '+21658905498',
      uid: {
        value: '09420741',
        type: UidType.CIN,
      },
      scolar: {
        level: 3,
      },
    };
    return c1;
  }
}
