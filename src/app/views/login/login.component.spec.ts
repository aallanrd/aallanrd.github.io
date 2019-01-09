import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],	  
	  imports: [
		  RouterModule, 
		  RouterTestingModule,
		  HttpClientModule, 
		  FormsModule, 
		  ReactiveFormsModule,
		  MatInputModule,
		  BrowserAnimationsModule
	  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('Login form should be invalid if username is empty', async(() => {
	  component.userForm.controls['username'].setValue('');
	  component.userForm.controls['password'].setValue('pass');
	  expect(component.userForm.valid).toBeFalsy();
  }));
  
  it('Login form should be invalid if password is empty', async(() => {
	  component.userForm.controls['username'].setValue('username');
	  component.userForm.controls['password'].setValue('');
	  expect(component.userForm.valid).toBeFalsy();
  }));
  
  it('Login form should be valid if username and password are entered', async(() => {
	  component.userForm.controls['username'].setValue('user');
	  component.userForm.controls['password'].setValue('pass');
	  expect(component.userForm.valid).toBeTruthy();
  }));
  
    
  it('Login Button should be disabled if fields are invalid.', async(() => {
	  component.userForm.controls['username'].setValue('');
	  component.userForm.controls['password'].setValue('');
	  let loginButton = fixture.debugElement.query(By.css('#loginSubmitBtn')).nativeElement;
	  fixture.detectChanges();
	  expect(loginButton.disabled).toBe(true);
  }));
  
  it('Login Button should be enabled if fields are valid.', async(() => {
	  component.userForm.controls['username'].setValue('validusername');
	  component.userForm.controls['password'].setValue('validPassword');
	  let loginButton = fixture.debugElement.query(By.css('#loginSubmitBtn')).nativeElement;
	  fixture.detectChanges();
	  expect(loginButton.disabled).toBe(false);
  }));
  
});
