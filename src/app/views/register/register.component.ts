import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  matcher: any;
  userForm: FormGroup;
  username:string='';
  email:string='';
  password:string='';

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
		this.userForm = this.formBuilder.group({
		'username' : [null, Validators.required],
		'email' : [null, [Validators.required, Validators.email]],
		'password' : [null, Validators.required]
		});
  }

  onFormSubmit(form:NgForm) {
    this.api.registerUser(form)
    .subscribe(res => {
      this.router.navigate(['/login']);
      }, (err) => {
      console.log(err);
      });
  }

}
