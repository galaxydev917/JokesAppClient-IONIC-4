import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { map} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Config } from "./Config";
import { PrankListResponse } from "./DataModel/PrankListResponse";
@Injectable({
  providedIn: 'root'
})
export class CallsService {
  private httpOptions;
  private http: HttpClient;
  private config: Config;

  constructor() { }
  public getPrankList(): Observable<PrankListResponse> {
    return this.http
      .get(this.config.BaseUrl + "prankList", this.httpOptions)
      .pipe(map(response => new PrankListResponse(<any>response)));
  }
}
