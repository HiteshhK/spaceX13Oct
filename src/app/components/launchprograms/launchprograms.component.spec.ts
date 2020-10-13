import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchprogramsComponent } from './launchprograms.component';

describe('LaunchprogramsComponent', () => {
  let component: LaunchprogramsComponent;
  let fixture: ComponentFixture<LaunchprogramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchprogramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchprogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
