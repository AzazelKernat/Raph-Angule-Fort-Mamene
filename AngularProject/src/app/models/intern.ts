import { Computer } from './computer';
import { Adress } from './adress';
import { Contact } from './contact';
import { Trainer } from './trainer';
import { Formation } from './formation';

export class Intern {
    id: number;
    surname: string;
    name: string;
    adress: Adress = new Adress();
    contact: Contact = new Contact();
}