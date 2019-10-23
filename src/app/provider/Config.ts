import { Injectable } from "@angular/core";

@Injectable()
export class Config {
  private readonly PROD_BASE_URL: string = "http://18.222.189.123:80/api/";
  private readonly DEV_BASE_URL: string = "http://localhost:8000/api/";

  constructor() {
    this.BaseUrl = this.PROD_BASE_URL;
  }

  public BaseUrl;
}
