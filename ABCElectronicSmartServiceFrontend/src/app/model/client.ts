import { publishFacade } from '@angular/compiler';

export class Client {
  constructor(
    public clientId: string,
    public clientName: String,
    public address: string,
    public phoneNumber: number
  ) {}
}
