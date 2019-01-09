import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  matcher: any;
  userForm: FormGroup;
  username:string='';
  password:string='';

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
	  this.userForm = this.formBuilder.group({
		'username' : [null, Validators.required],
		'password' : [null, Validators.required]
		});
  }

  onFormSubmit(form:NgForm) {
    this.api.loginUser(form)
    .subscribe(res => {
      let token = res['token'];
	  localStorage.setItem('token', token);
	  this.api.setUserLoggedIn(true);
	  console.log('The User TOKEN is: '+localStorage.getItem("token"));
	  this.router.navigateByUrl('/home');
      }, (err) => {
      console.log(err);
      });
  }
}
