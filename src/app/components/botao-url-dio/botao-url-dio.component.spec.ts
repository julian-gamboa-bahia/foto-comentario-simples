import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoUrlDioComponent } from './botao-url-dio.component';

describe('BotaoUrlDioComponent', () => {
  let component: BotaoUrlDioComponent;
  let fixture: ComponentFixture<BotaoUrlDioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoUrlDioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoUrlDioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
