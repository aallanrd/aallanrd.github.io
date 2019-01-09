import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-arena-create',
  templateUrl: './arena-create.component.html',
  styleUrls: ['./arena-create.component.css']
})
export class ArenaCreateComponent implements OnInit {
	
	matcher: any;
	arenaForm: FormGroup;
	name:string='';
	opened:string='';
	cost:number=0;
	location:string='';
	address:string='';
	capacity:number=0;
	
	constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

	ngOnInit() {
		this.arenaForm = this.formBuilder.group({
		'name' : [null, Validators.required],
		'opened' : [null, Validators.required],
		'cost' : [null, [Validators.required,Validators.maxLength(12)]],
		'location' : [null, Validators.required],
		'address' : [null, Validators.required],
		'capacity' : [null, [Validators.required,Validators.maxLength(6)]]
		});
	}
	
	onFormSubmit(form:NgForm) {
		this.api.postArena(form)
		.subscribe(res => {
			let id = res['_id'];
			console.log(id);
			this.router.navigate(['/arena-details', id]);
		  }, (err) => {
			console.log(err);
		  });
	}

}
