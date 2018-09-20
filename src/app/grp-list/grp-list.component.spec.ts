import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrpListComponent } from './grp-list.component';

describe('GrpListComponent', () => {
  let component: GrpListComponent;
  let fixture: ComponentFixture<GrpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
