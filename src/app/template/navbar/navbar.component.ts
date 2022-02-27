import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserIdleService } from 'angular-user-idle';
import { Utilisateur } from 'src/app/models/app-models/user.model';
import { RouteStateService } from 'src/app/services/commons/route-state.service';
import { SessionService } from 'src/app/services/commons/session.service';
import { UserContextService } from 'src/app/services/commons/user-context.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true;

  user!: Utilisateur;

  private toggleButton: any;
  private sidebarVisible: boolean = false;

  @Input() classEl : string = "";

  constructor(
    private _userIdle: UserIdleService,
    private _loginService: LoginService,
    private _routeStateService: RouteStateService,
    private _router: Router,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    this.user = this._loginService.getUser();

    // on commence a suivre l'innactivité de l'utilisateur
    this._userIdle.startWatching();

    this._userIdle.onTimerStart().subscribe();

    this._userIdle.onTimeout().subscribe(()=>{
      this.logout();
    });

    const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];

    if (this.isLogedIn()) {
      this.classEl = "bg-white";
    }

    this.defClassEL()

  }

  public defClassEL() {
    if (this._routeStateService.getCurrent().title === "home") {
      this.classEl = "header-transparent"
    }
  }

  backToHome() {
    this._routeStateService.backToHome();
  }

  logout() {
    this._userIdle.stopWatching();
    this._routeStateService.removeAll();
    this._routeStateService.backToHome();
    this._loginService.logout();
  }

  getUserName(): string {
    var username:string  = '';
    if (this.user != null){
      username = this.user.matricule.prenom;
      username = username.split(' ')[0];
    }
    return username;
  }

  isLogedIn(): boolean {
    return this._loginService.isLoggedIn();
  }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    // console.log(toggleButton, 'toggle');

    /*setTimeout(function(){
        toggleButton.classList.add('toggled');
    }, 500);*/
    html.classList.add('nav-open');

    this.sidebarVisible = true;
  }
  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    //this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  }
  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
        this.sidebarOpen();
    } else {
        this.sidebarClose();
    }
  }

  openMonProgramme() {
    this._routeStateService.add("Mon Programme", "/main/mon-programme", null, false);
  }

  openLogin() {
    this._routeStateService.add("Login", "/home/login", null, false);
  }

  openRegister() {
    this._routeStateService.add("Register", "/home/register", null, false);
  }

  openBlog() {
    this._routeStateService.add("Blog", "/blog", null, false);
  }

}
