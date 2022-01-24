import { IArea } from "../Interface/iarea";
import { ICircumference } from "../Interface/icircumference";
import { Shape } from "./shape";

export class Square extends Shape implements IArea, ICircumference {
    constructor(A: number) {
        super(A);
    }

    GetCircumference(): number {
        return (this.A * 4);
    }

    GetArea(): number {
        return this.A * this.A;
    }
}
