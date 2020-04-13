import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesConfigComponent } from './clientes-config.component';

describe('ClientesConfigComponent', () => {
  let component: ClientesConfigComponent;
  let fixture: ComponentFixture<ClientesConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
