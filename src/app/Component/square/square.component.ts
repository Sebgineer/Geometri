import { Component, OnInit } from '@angular/core';
import { Square } from 'src/app/Class/square';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  A: number = 100;

  area?: number;
  circumference?: number;

  square: Square = new Square(this.A);

  constructor() {
    this.onChange();
  }

  onChange(): void {
    this.square.A = this.A;
    this.area = this.square.GetArea();
    this.circumference = this.square.GetCircumference();
  }

  ngOnInit(): void {
  }

}
