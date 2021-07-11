export interface IInfo {
    message: string;
    sendBy: string;
}

export class Info implements IInfo {
    message: string;
    sendBy: string;

    constructor(message: string, sendBy: string) {
        this.message = message;
        this.sendBy = sendBy;
    }
}