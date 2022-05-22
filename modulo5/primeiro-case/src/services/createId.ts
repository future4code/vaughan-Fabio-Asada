import { v4 } from "uuid";

export class CreateIds{
    public id(): string {
        return v4();
    }
}
