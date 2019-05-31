import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTablaComponent } from './mtabla.component';

describe('MTablaComponent', () => {
  let component: MTablaComponent;
  let fixture: ComponentFixture<MTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
