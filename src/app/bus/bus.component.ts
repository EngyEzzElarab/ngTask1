import { Component, Input, OnInit } from '@angular/core';
//import { HumanModule } from '../human/human.module';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {
  
  inputText: string="";
  public men:string[]=[];
  public dataArr:any[]=[];
  public man:string="";
  constructor() { }


  ngOnInit(): void {
  }
  addMan()
  {
    this.men.push(this.inputText);
    this.man=this.inputText;
    this.inputText="";
    
  }
  getDataFromChild(event:any)
  {
      this.dataArr.push(event)

  }
}
