import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../services/login.service";

@Injectable()
export class AuthGard implements CanActivate{

  constructor(
    private _router: Router,
    private _loginService: LoginService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    var user = this._loginService.getUser();
    if (user != null) {
      return true;
    } else {
      this._router.navigate(['/home']);
      return false;
    }

  }



}
