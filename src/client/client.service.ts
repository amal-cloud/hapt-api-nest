import { Injectable } from '@nestjs/common';
import { Client, GenderType, UidType } from './client.interface';

const clients: Client[] = [
  {
    fullname: 'Afef Kaffaf',
    address: {
      city: 'Sousse',
      street: 'Roundpoint Panorama',
      zip: 4033,
    },
    gender: GenderType.FEMALE,
    phone: '+21658905498',
    uid: {
      value: '09420741',
      type: UidType.CIN,
    },
    scolar: {
      level: 3,
    },
  },
  {
    fullname: 'Malek Abdellaoui',
    address: {
      city: 'Sousse',
      street: 'Sousse',
      zip: 4033,
    },
    gender: GenderType.MALE,
    phone: '+2162345678',
    uid: {
      value: '09876554',
      type: UidType.CIN,
    },
    scolar: {
      level: 5,
    },
  },
  {
    fullname: 'Malek Boubakri',
    address: {
      city: 'Sousse',
      street: 'Sousse',
      zip: 4033,
    },
    gender: GenderType.MALE,
    phone: '+2162345678',
    uid: {
      value: '09876554',
      type: UidType.CIN,
    },
    scolar: {
      level: 5,
    },
  },
];

@Injectable()
export class ClientService {
  getClient(id: string): Client {
    return clients.find((c: Client) => c.uid.value === id);
  }
  getClients(name?: string, gender?: string): Client[] {
    if (!name && !gender) return clients;
    return clients.filter(
      (c) => c.fullname.includes(name) || c.gender === gender,
    );
  }
}
