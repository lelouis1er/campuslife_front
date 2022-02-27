import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/commons/loader.service';
import { RouteStateService } from './services/commons/route-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'campuslife -';
  showLoader: any = null;

  constructor(
    private _loaderService: LoaderService,
    private _routeStateService: RouteStateService
  ){}

  ngOnInit() {
    this._loaderService.status.subscribe((val:boolean)=>{
      this.showLoader = val;
    });
    this.title += this._routeStateService.getCurrent().title;
  }

  showError(msg: any) {

  }

  ngOnDestroy(): void {
    this._loaderService.status.observers.forEach(
      function (element){
        element.complete();
      }
    );
  }

}
