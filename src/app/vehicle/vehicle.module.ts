import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from '../car/car.component';
import { BusComponent } from '../bus/bus.component';
import { HumanModule } from '../human/human.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CarComponent,BusComponent],
  imports: [
    CommonModule,HumanModule, FormsModule
  ],
  exports:[BusComponent]
  
})
export class VehicleModule { 

}
