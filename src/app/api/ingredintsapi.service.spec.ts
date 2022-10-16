import { HttpClientTestingModule ,HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { IngredintsapiService } from './ingredintsapi.service';


  describe('IngredintsApiService With mock Data',()=>{
    let service:IngredintsapiService;
    let httpMock:HttpTestingController;
    const ingResponse=
    {
       
    }
    beforeEach(()=>{
       TestBed.configureTestingModule({
        imports:[HttpClientTestingModule]
       })
       service=TestBed.inject(IngredintsapiService);
       httpMock=TestBed.inject(HttpTestingController);
    })
   

    it("Must get Data as exptected",()=>{
      
        let sendData={ingr:['1 cup rice','10 ounce chickpeas']};
        service.getIngredintsInfo(sendData).subscribe((data)=>{
            console.log('data is ',data);
            expect(data).toEqual(ingResponse)
        }) 
        const req=httpMock.expectOne(`${service.apiUrl}nutrition-details/app_id=${service.appId}&app_key=${service.appKey}`);
        req.flush(ingResponse);
        httpMock.verify()
    })
  })