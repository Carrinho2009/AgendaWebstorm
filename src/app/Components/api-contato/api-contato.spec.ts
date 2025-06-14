import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiContato } from './api-contato';

describe('ApiContato', () => {
  let component: ApiContato;
  let fixture: ComponentFixture<ApiContato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiContato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiContato);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
