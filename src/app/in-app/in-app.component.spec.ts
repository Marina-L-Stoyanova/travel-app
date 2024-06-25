import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxAvatarModule, IgxNavigationDrawerModule } from '@infragistics/igniteui-angular';
import { InAppComponent } from './in-app.component';

describe('InAppComponent', () => {
  let component: InAppComponent;
  let fixture: ComponentFixture<InAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InAppComponent ],
      imports: [ NoopAnimationsModule, FormsModule, RouterTestingModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxAvatarModule, IgxNavigationDrawerModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
