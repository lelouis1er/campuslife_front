import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RouteStateService } from 'src/app/services/commons/route-state.service';
import { ToastService } from 'src/app/services/commons/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-active-form',
  templateUrl: './active-form.component.html',
  styleUrls: ['./active-form.component.css'],
})
export class ActiveFormComponent implements OnInit {
  @Output() itemEvent = new EventEmitter<string>();

  formActive!: FormGroup;

  constructor( private formBuilder: FormBuilder,
               private userService : UserService,
               private _toast : ToastService,
               private _routeStateService : RouteStateService) {}


  checkPassword : ValidatorFn = (group: AbstractControl) : ValidationErrors | null => {
    let pass = group.get('mdp')?.value;
    let confirm = group.get('mdpConf')?.value;

    return pass === confirm ? null : {notSame: true};
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formActive = this.formBuilder.group(
      {
        codeVerif:['', Validators.required],
        mdp:['', [Validators.required]],
        mdpConf: ['', Validators.required]
      }, {validators: this.checkPassword}
    );
  }


  validForm() {
    this.userService.activeAccount(this.formActive.value['codeVerif'], this.formActive.value['mdp']).then (
      (success) => {
        if (success) {
          this._toast.addSingle('success', "Votre compte est désormais activé");
          this.backToLogin();
        } else {
          this._toast.addSingle('danger', "Le code de vérification est incorrect");
        }
      },(error) =>{
        console.error(error);
        this._toast.addSingle('danger', "Une erreur s'est produite");
      }
    )
  }

  backToLogin() {
    this._routeStateService.add("Login", "home/login", null, false)
  }


}
