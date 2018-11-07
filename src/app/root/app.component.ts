import { Component, OnInit} from '@angular/core';
import {AuthService} from '../auth-service/auth.service';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

constructor( private _userMonitor: AuthService){}

ngOnInit(){
  this._userMonitor.monitorUserState();
}

}
