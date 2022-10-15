import { Component, OnInit } from '@angular/core';
import { Iingredints } from 'src/app/model/ingredints.model';
import { IngredintsService } from 'src/app/state/ingredints.state';


@Component({
  selector: 'app-ing-details',
  templateUrl: './ing-details.component.html',
  styleUrls: ['./ing-details.component.scss']
})
export class IngDetailsComponent implements OnInit {
  displayedColumns: string[] = ['Quantity', 'Unit', 'Food', 'Calories','Weight'];
  dataSource=[];
  toggleFlag:boolean=false;
  ingredintsState=this._ingSate.ingredintSubject.getValue();
  constructor(
    private _ingSate:IngredintsService
    ) { }

  ngOnInit(): void {
   this._ingSate.getIngredints().subscribe(res=>{
      console.log(res);
       this.ingredintsState=res;
       this.dataSource=this.ingredintsState.ingredients
       console.log(this.dataSource);
       
    });
   
  }

  toggleFacts(){
      this.toggleFlag=!this.toggleFlag;
  }
}
