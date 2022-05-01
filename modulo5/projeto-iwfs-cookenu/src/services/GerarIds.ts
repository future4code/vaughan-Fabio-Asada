import { v4 } from "uuid";

export class GerarIds{
    public id(): string {
        return v4();
    }
}

