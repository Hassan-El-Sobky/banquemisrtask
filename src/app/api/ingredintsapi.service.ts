import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iingredints ,Idata} from '../model/ingredints.model';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class IngredintsapiService {
  apiUrl=environment.apiURL;
  appKey=environment.app_key;
  appId=environment.app_id;
  params = new HttpParams()
  .set('app_id', this.appId)
  .set('app_key', this.appKey);
  
  constructor(private _httpClient:HttpClient) { }

  getIngredintsInfo(data:Idata):Observable<Iingredints>{
    return this._httpClient.post<Iingredints>(`${this.apiUrl}nutrition-details`,data,{params:this.params})
  }

}
