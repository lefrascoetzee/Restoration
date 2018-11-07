import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service/auth.service';
import { Observable } from 'rxjs';
import { User } from '@firebase/auth-types';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public user: Observable<User>;

  constructor( 
    public authserv: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authserv.user;
  }

  public doLogin(){
    this.authserv.login('');
  }

  public doLogout(){
    this.authserv.logout();
  }
}
