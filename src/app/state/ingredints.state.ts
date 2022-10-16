import { Injectable } from '@angular/core';
import { BehaviorSubject,Subject } from 'rxjs';
import { Iingredints } from '../model/ingredints.model';
@Injectable({
  providedIn: 'root'
})
export class IngredintsService {
  public errorInRequest:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  public ingredintSubject:BehaviorSubject<Iingredints|any> = new BehaviorSubject({});
  constructor() { }
  setIngredints(ingredints:Iingredints) {
    this.ingredintSubject.next(ingredints);
  }
  getIngredints() {
     return this.ingredintSubject
  }
}
