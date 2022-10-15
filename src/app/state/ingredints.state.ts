import { Injectable } from '@angular/core';
import { BehaviorSubject,Subject } from 'rxjs';
import { Iingredints } from '../model/ingredints.model';
@Injectable({
  providedIn: 'root'
})
export class IngredintsService {
  ingredintSubject:BehaviorSubject<Iingredints|any> = new BehaviorSubject({});
  constructor() { }
  setIngredints(ingredints:Iingredints) {
    this.ingredintSubject.next(ingredints);
  }
  getIngredints() {
     return this.ingredintSubject
  }
}
