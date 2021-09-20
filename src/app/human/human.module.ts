import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManComponent } from '../man/man.component';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ManComponent,ChildComponent],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[ManComponent]
})
export class HumanModule { }
