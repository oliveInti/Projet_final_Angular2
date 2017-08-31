/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VoyageComponent } from './voyage.component';

describe('VoyageComponent', () => {
  let component: VoyageComponent;
  let fixture: ComponentFixture<VoyageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoyageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
