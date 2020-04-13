import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoConfigComponent } from './pedido-config.component';

describe('PedidoConfigComponent', () => {
  let component: PedidoConfigComponent;
  let fixture: ComponentFixture<PedidoConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
