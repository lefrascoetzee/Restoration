import { Injectable, OnInit} from '@angular/core';

import { Observable, from} from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { User} from '@firebase/auth-types';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  public user: Observable<User>;

  //public user: userObject = new userObject;
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
  ) { }

  ngOnInit() {
     this.monitorUserState();
  }

public monitorUserState():void{
    this.user = this.afAuth.authState;
}

public isUserLoggedin(): Observable<boolean>{
  return this.user.pipe(
    take(1),
    map(authState => !!authState)
  );
}

public login(gotoURL?: string){
  let lgn:Observable<any> = from(this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()));
  lgn.subscribe( res => { 
    if(res.user){
      if(gotoURL!=null){
        this.router.navigate([gotoURL])
      }
    } else{
      this.router.navigate(['/']);
    }
  });
}

public logout(){
  this.afAuth.auth.signOut();
  this.router.navigate(['/']);
}

}