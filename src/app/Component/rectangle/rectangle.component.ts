import { ThrowStmt } from '@angular/compiler';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Rectangle } from 'src/app/Class/rectangle';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

  A: number = 100;
  B: number = 100;
  
  area?: number;
  circumference?: number;
  
  rect: Rectangle = new Rectangle(this.A, this.B);

  constructor() {
    this.onChange();
  }

  onChange(): void {
    this.rect.A = this.A;
    this.rect.B = this.B;
    this.area = this.rect.GetArea();
    this.circumference = this.rect.GetCircumference();
  }

  ngOnInit(): void {
  }

}
