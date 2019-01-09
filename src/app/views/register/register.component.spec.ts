import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
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
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('Register form should be invalid if username is empty', async(() => {
	  component.userForm.controls['username'].setValue('');
	  component.userForm.controls['email'].setValue('email@email.com');
	  component.userForm.controls['password'].setValue('pass');
	  expect(component.userForm.valid).toBeFalsy();
  }));
  
  it('Register form should be invalid if email is empty', async(() => {
	  component.userForm.controls['username'].setValue('username');
	  component.userForm.controls['email'].setValue('');
	  component.userForm.controls['password'].setValue('password');
	  expect(component.userForm.valid).toBeFalsy();
  }));
  
  it('Register form should be invalid if email has wrong format', async(() => {
	  component.userForm.controls['username'].setValue('username');
	  component.userForm.controls['email'].setValue('notAnEmail!');
	  component.userForm.controls['password'].setValue('password');
	  expect(component.userForm.valid).toBeFalsy();
  }));
  
  it('Register form should be invalid if password is empty', async(() => {
	  component.userForm.controls['username'].setValue('username');
	  component.userForm.controls['email'].setValue('valid@email.com');
	  component.userForm.controls['password'].setValue('');
	  expect(component.userForm.valid).toBeFalsy();
  }));
  
  it('Register form should be valid if username and password are entered', async(() => {
	  component.userForm.controls['username'].setValue('user');
	  component.userForm.controls['email'].setValue('valid@email.com');
	  component.userForm.controls['password'].setValue('pass');
	  expect(component.userForm.valid).toBeTruthy();
  }));  
    
  it('Register Button should be disabled if fields are invalid.', async(() => {
	  component.userForm.controls['username'].setValue('');
	  component.userForm.controls['email'].setValue('');
	  component.userForm.controls['password'].setValue('');
	  let registerButton = fixture.debugElement.query(By.css('#registerSubmitBtn')).nativeElement;
	  fixture.detectChanges();
	  expect(registerButton.disabled).toBe(true);
  }));
  
  it('Register Button should be enabled if fields are valid.', async(() => {
	  component.userForm.controls['username'].setValue('validusername');
	  component.userForm.controls['email'].setValue('valid@email.com');
	  component.userForm.controls['password'].setValue('validPassword');
	  let registerButton = fixture.debugElement.query(By.css('#registerSubmitBtn')).nativeElement;
	  fixture.detectChanges();
	  expect(registerButton.disabled).toBe(false);
  }));
});
