import { IArea } from "../Interface/iarea";
import { ICircumference } from "../Interface/icircumference";
import { Shape } from "./shape";

export class Rectangle extends Shape implements IArea, ICircumference {

    B: number;

    constructor(A: number, B: number) {
        super(A);
        this.B = B;
    }

    GetCircumference(): number {
        return (this.A * 2) + (this.B * 2);
    }

    GetArea(): number {
        return this.A * this.B;
    }
}