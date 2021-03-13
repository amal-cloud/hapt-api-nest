import { Lead } from '../lead/lead.interface';

export enum UidType {
  CIN = 0,
  PASSPORT = 1,
  DRIVER_LICE = 2,
  MAT_FISC = 3,
  OTHER = 4,
}

export interface Client extends Lead {
  fullname: string;
  uid: {
    value: string;
    type: UidType;
  };
  birthdate?: Date;
  scolar: {
    level: number;
    diploma?: string;
  };
  note?: number;
  address: {
    street: string;
    city: string;
    zip: number;
  };
}
