import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IngredintsService } from 'src/app/state/ingredints.state';
import { IngredintsapiService } from './../../api/ingredintsapi.service';
import { Idata } from './../../model/ingredints.model';
@Component({
  selector: 'app-ingredints-form',
  templateUrl: './ingredints-form.component.html',
  styleUrls: ['./ingredints-form.component.scss']
})
export class IngredintsFormComponent implements OnInit {

  constructor(
    private _ingService:IngredintsapiService,
    private _ingState:IngredintsService,
    private _router:Router,
    
    ) {}
  
 
  ingredienttextArea:FormGroup=new FormGroup({
    ingredints:new FormControl(null,[Validators.required,Validators.minLength(8)]),
  })

  submitForm() {
    //  console.log(this.ingredienttextArea.value.ingredints.);
     let ingValues:string=this.ingredienttextArea.value.ingredints;
     let ingNewFroamt=ingValues.split('\n');
     let ingData:Idata={ingr:ingNewFroamt};
     console.log(ingNewFroamt);
     this._ingService.getIngredintsInfo(ingData).subscribe(res=>{
      // console.log(res);
      this._ingState.setIngredints(res);
      this._router.navigate(['/details'])
     })
  }

  ngOnInit(): void {
  
  }
  

}
