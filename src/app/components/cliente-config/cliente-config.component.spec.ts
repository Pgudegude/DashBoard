import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteConfigComponent } from './cliente-config.component';

describe('ClienteConfigComponent', () => {
  let component: ClienteConfigComponent;
  let fixture: ComponentFixture<ClienteConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
