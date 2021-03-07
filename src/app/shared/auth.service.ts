import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'



 
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";

  constructor(private http: HttpClient,
    private _router: Router) { }
  

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }
  loggedIn(){
    return localStorage.getItem('token')
  }
  
  // cette méthode renvoie une promesse (on devra traiter le résultat avec un then...)
  // la valeur renvoyé (qu'on récupèrera dans le then(val => {....}) est la valeur
  // de la propriété loggedIn. En gros, si on est loggué, on est admin...
  isAdmin(): Promise<any> {
    const isUserAdmin = new Promise((resolve, reject) => {
      resolve(this.loggedIn);
    });

    return isUserAdmin;
  }
  
getToken(){
  return localStorage.getItem('token')
}


}
