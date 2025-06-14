import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiEmail } from './api-email';

describe('ApiEmail', () => {
  let component: ApiEmail;
  let fixture: ComponentFixture<ApiEmail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiEmail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiEmail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
