import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { BlogComponent } from './blog.component';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogComponent ],
      imports: [ ScullyLibModule ],
      providers: [
        { provide: ActivatedRoute, useValue: { params: of({ id: 'test-id' }) } }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
