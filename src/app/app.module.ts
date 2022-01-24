import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RectangleComponent } from './Component/rectangle/rectangle.component';
import { SquareComponent } from './Component/square/square.component';
import { NavComponent } from './Component/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    RectangleComponent,
    SquareComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
