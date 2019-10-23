import { Injectable } from '@angular/core';

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BaseResponse } from "./DataModel/BaseResponse";
import { User, AuthenticationService } from "./DataModel/User";
import { Facebook, FacebookLoginResponse} from "@ionic-native/facebook";
import { Config } from "./Config";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly STORAGE_USER_KEY: string = "UserInfo";

  constructor() { }

  public GetLoggedInUserOrNull(): null | User {
    let userDetailsString: string = localStorage.getItem(this.STORAGE_USER_KEY);

    if (userDetailsString == null) {
      return null;
    }

    let user: User = JSON.parse(userDetailsString);
    return user;
  }  
}
