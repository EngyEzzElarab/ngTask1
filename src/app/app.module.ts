import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { BusComponent } from './bus/bus.component';
//import { ManComponent } from './man/man.component';
//import { ChildComponent } from './child/child.component';
import { VehicleModule } from './vehicle/vehicle.module';
//import { HumanModule } from './human/human.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,VehicleModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
