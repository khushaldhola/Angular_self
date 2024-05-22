import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WannaBeParentComponent } from './wanna-be-parent.component';

describe('WannaBeParentComponent', () => {
  let component: WannaBeParentComponent;
  let fixture: ComponentFixture<WannaBeParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WannaBeParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WannaBeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
