import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateLoginComponent } from './template-login.component';

describe('TemplateLoginComponent', () => {
  let component: TemplateLoginComponent;
  let fixture: ComponentFixture<TemplateLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
