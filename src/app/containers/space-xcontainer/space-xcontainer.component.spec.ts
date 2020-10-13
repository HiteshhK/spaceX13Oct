import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceXcontainerComponent } from './space-xcontainer.component';

describe('SpaceXcontainerComponent', () => {
  let component: SpaceXcontainerComponent;
  let fixture: ComponentFixture<SpaceXcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceXcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceXcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
