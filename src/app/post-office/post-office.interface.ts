import { propertyMap } from "@core/mapper";

export interface IPostOffice {
    PostOffice: string;
    City: string;
    State: string;
}

export class PostOffice implements IPostOffice {
    @propertyMap('Name')
    PostOffice: string;
    @propertyMap('District')
    City: string;
    @propertyMap('State')
    State: string;

    constructor() {
        this.PostOffice = '';
        this.City = '';
        this.State = '';
    }
}