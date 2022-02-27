import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Etudiant } from 'src/app/models/app-models/etudiant.model';
import { Utilisateur } from 'src/app/models/app-models/user.model';
import { RouteStateService } from 'src/app/services/commons/route-state.service';
import { SessionService } from 'src/app/services/commons/session.service';
import { ToastService } from 'src/app/services/commons/toast.service';
import { UserContextService } from 'src/app/services/commons/user-context.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  @Input() email: string = '';
  @Input() mdp: string = '';

  loginForm!: FormGroup;

  @Output() itemEvent = new EventEmitter<any>();

  focus: any;
  focus1: any;

  //user: Utilisateur = new Utilisateur();

  constructor(
    private _userService: UserService,
    private _routeStateService: RouteStateService,
    private _formBuilder: FormBuilder,
    private _toast: ToastService,
    private _userContextService: UserContextService,
    private _loginService: LoginService
  ) {}

  ngOnInit(): void {

    this.initForm();
  }

  initForm() {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      mdp: ['', [Validators.required]],
    });
  }

  swhoActiveCompte() {
    this._routeStateService.add("register", "home/register", null, false);
  }

  onLogin() {
    let _temp;

    this._loginService
      .generateToken(this.loginForm.value['email'], this.loginForm.value['mdp'])
      .subscribe(
        (data : any) => {
          _temp = data;
          if (_temp) {
            //this._userContextService.setUser(_temp);
            //this._routeStateService.add('main', '/main', null, true);


            this._loginService.loginUser(_temp.token);

            this._loginService.getCurrentUser().subscribe(
              (usr: Utilisateur) => {
                this._loginService.setUserDetails(usr);
                this._toast.addSingle('success', 'Connexion établie');

                if (this._loginService.getuserRole() == "Etudiant") {

                  this._routeStateService.add('main', '/main', null, true);

                } else {
                  this._toast.addSingle('danger', 'Erreur: Ceci n\'est ni un compte etudiant ni un compte administrateur...  ');
                  this._loginService.logout();
                }

              }, (error) => {
                this._toast.addSingle('danger', 'Erreur: ' + error);

              }
            );


            return;
          } else {
            console.error("Nom d'utilisateur ou mot de passe incorrect");
            this._toast.addSingle(
              'danger',
              'Matricule ou mot de passe incorrect'
            );
          }
        },
        (error) => {
          console.error("Une erreur s'est produite: " + error);
          console.log(error);
          this._toast.addSingle(
            'danger',
            "Une erreur s'est produite! " + error
          );
        }
      );
  }
}
