import { Trainer } from './trainer';
import { Module } from './module';

export class Subject {
    id: number;
    title: string;
    duration: number;
    objectives: Array<string>;
    prerequisites: Array<string>;
    content: string;
    level: string;
    trainers: Trainer;
    module: Module; }
