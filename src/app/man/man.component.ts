import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-man',
  templateUrl: './man.component.html',
  styleUrls: ['./man.component.css']
})
export class ManComponent implements OnInit {
  @Output() public uploadData= new EventEmitter();
   @Input() public manName:string= "";
   public dataInput:string ="";
  constructor() { }

  ngOnInit(): void {
  }
  upload()
  {
   this.uploadData.emit(this.manName+ " says : " +this.dataInput)   
   // this.getManName.emit(this.manName);
  }

}
