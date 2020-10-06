import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {
  private isLoggedIn: boolean = false;
  constructor() { }


  public getLoggedIn(): boolean{
      return this.isLoggedIn;
  }

  public setLoggedIn(flag: boolean){
    this.isLoggedIn = flag;;
  }
}
