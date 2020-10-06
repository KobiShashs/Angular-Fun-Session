import { Router } from '@angular/router';
import { LocalDataService } from './../../services/local-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // public isLoggedIn: boolean = false;
 public constructor(private localDataService: LocalDataService, private router: Router) { }

  ngOnInit(): void {
  }

  // public ChangeFlag(){
  //   this.isLoggedIn = !this.isLoggedIn;
  // }

  public isLoggedIn(): boolean{
    return this.localDataService.getLoggedIn();
  }

  public login(): void{
    this.localDataService.setLoggedIn(true);
  }

  public logout(): void{
    this.localDataService.setLoggedIn(false);
  }

  public openAboutScreen(): void{
    this.router.navigateByUrl('about');
  }

}
