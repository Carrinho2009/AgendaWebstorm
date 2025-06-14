import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTelefone } from './api-telefone';

describe('ApiTelefone', () => {
  let component: ApiTelefone;
  let fixture: ComponentFixture<ApiTelefone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiTelefone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiTelefone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
