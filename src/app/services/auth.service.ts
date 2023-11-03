import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RestAPIService } from './restAPI.service';


@Injectable()

export class Auth0Service {
  loggedInfo: any[] = [];

 

  
  constructor(public router: Router, private restapi: RestAPIService ) { }

  public login(): void {
  }
  public isAuthenticated(){
    return true
  }
  public handleAuthentication(): void {
    
    }

}
