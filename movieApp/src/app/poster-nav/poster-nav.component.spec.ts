import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterNavComponent } from './poster-nav.component';

describe('PosterNavComponent', () => {
  let component: PosterNavComponent;
  let fixture: ComponentFixture<PosterNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
