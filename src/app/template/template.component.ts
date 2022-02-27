import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from '../services/commons/application-state.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor(
    private _applicationStateService: ApplicationStateService
  ) { }

  ngOnInit(): void {
    var that = this;

    if (this._applicationStateService.getIsMobileResolution()) {

    } else {

    }
  }

}
