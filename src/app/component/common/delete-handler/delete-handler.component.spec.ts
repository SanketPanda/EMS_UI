import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHandlerComponent } from './delete-handler.component';

describe('DeleteHandlerComponent', () => {
  let component: DeleteHandlerComponent;
  let fixture: ComponentFixture<DeleteHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteHandlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
