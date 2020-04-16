import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturamentoConfigComponent } from './faturamento-config.component';

describe('FaturamentoConfigComponent', () => {
  let component: FaturamentoConfigComponent;
  let fixture: ComponentFixture<FaturamentoConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaturamentoConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturamentoConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
