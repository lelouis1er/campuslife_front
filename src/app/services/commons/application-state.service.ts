import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService {

  isMobileResolution: boolean;

  constructor() {
    if (window.innerWidth <= 992) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }

  }

  public getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }

}
