export interface ITodo {
    Task: string;
    IsCompleted: boolean;
}

export class Todo implements ITodo {
    Task: string;
    IsCompleted: boolean;

    constructor(Task: string, IsCompleted: boolean) {
        this.Task = Task;
        this.IsCompleted = IsCompleted;
    }
}
