import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonProgrammeComponent } from './mon-programme.component';

describe('MonProgrammeComponent', () => {
  let component: MonProgrammeComponent;
  let fixture: ComponentFixture<MonProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonProgrammeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
