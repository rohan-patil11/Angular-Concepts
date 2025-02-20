import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyapiComponent } from './dummyapi.component';

describe('DummyapiComponent', () => {
  let component: DummyapiComponent;
  let fixture: ComponentFixture<DummyapiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DummyapiComponent]
    });
    fixture = TestBed.createComponent(DummyapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
