import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RouteStateService } from 'src/app/services/commons/route-state.service';
import { ToastService } from 'src/app/services/commons/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  @Output() itemEvent = new EventEmitter<string>();
  formRegister! : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService : UserService,
    private _toast : ToastService,
    private _routeStateService: RouteStateService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formRegister = this.formBuilder.group(
      {
        matricule:['', Validators.required],
        email:['', [Validators.email, Validators.required]]
      }
    );
  }

  validForm() {

    this.userService.genCode(this.formRegister.value['matricule'], this.formRegister.value['email']).then (
      (success) => {
        if (success) {
          this._toast.addSingle('success', "Matricule existe bien !!!");
          this.goToActive();
        } else {
          this._toast.addSingle('danger', "Ce matricule n'existe pas !!!");
        }
      },(error) =>{
        console.error(error);
        this._toast.addSingle('danger', "Une erreur s'est produite");
      }
    );
  }

  goToActive() {
    this._routeStateService.add("Active", "/home/active-account", null, false);
  }

  backToLogin() {
    this._routeStateService.add("Login", "/home/login", null, false);
  }

}
