/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditionClientComponent } from './edition-client.component';

describe('EditionClientComponent', () => {
  let component: EditionClientComponent;
  let fixture: ComponentFixture<EditionClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditionClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
