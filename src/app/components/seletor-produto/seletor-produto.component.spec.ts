import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletorProdutoComponent } from './seletor-produto.component';

describe('SeletorProdutoComponent', () => {
  let component: SeletorProdutoComponent;
  let fixture: ComponentFixture<SeletorProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeletorProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeletorProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
