export interface IStatus {
    Status: string;
    Message: string;
}

export class Status implements IStatus {
    Status: string;
    Message: string;

    constructor(Status: string, Message: string) {
        this.Status = Status;
        this.Message = Message;
    }
}
