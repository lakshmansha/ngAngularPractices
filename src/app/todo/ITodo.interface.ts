import { v4 as uuidv4 } from 'uuid';

export interface ITodo {
    Task: string;
    IsCompleted: boolean;
}

export class Todo implements ITodo {
    Id: string;
    Task: string;
    IsCompleted: boolean;

    constructor(Task: string, IsCompleted: boolean) {
        this.Id = uuidv4();
        this.Task = Task;
        this.IsCompleted = IsCompleted;
    }
}
