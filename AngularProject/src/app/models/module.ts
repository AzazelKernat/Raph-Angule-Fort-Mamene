import { Trainer } from './trainer';
import { Room } from './room';
import { Formation } from './formation';
import { Subject } from './subject';

export class Module {
    id: number;
    datedebut: Date;
    trainer: Trainer;
    subject: Subject;
    room: Room;
    formation: Formation;
 }