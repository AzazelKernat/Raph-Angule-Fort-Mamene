import { Adress } from './adress';
import { Contact } from './contact';

export class Technician {
    id: number;
    surname: string;
    name: string;
    adress: Adress;
    contact: Contact;
    password: string;
    username: string;
}