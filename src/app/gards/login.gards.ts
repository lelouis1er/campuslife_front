import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { RouteStateService } from "../services/commons/route-state.service";
import { LoginService } from "../services/login.service";


@Injectable()
export class LoginGards implements CanActivate{


  constructor( private _routeStateService: RouteStateService,
               private _loginService: LoginService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    var user = this._loginService.getUser();
    if (user == null) {
      return true;
    } else {
      this._routeStateService.add('main', '/main', null, true);
      return false;
    }

  }

}
