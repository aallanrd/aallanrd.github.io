import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';

export interface Arena {
  name: string;
}

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {
	arenas: Observable<Array<any>>;
	dataSource = new ArenaDataSource(this.api);
	arena_id:string='';
	
	matcher: any;
	teamForm: FormGroup;
	name:string='';
	founded:string='';
	coach:string='';
	ownership:string='';
	affiliations:string='';
  
	constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.teamForm = this.formBuilder.group({
		'name' : [null, Validators.required],
		'founded' : [null, Validators.required],
		'coach' : [null, Validators.required],
		'ownership' : [null, Validators.required],
		'affiliations' : [null, Validators.required],
		'arena_id': [null, Validators.required]
		});
		
		this.api.getArenas()
		.subscribe(res => {
			this.arenas = of(res);
		}, err => {
			console.log(err);
		});
	}
	
	onFormSubmit(form:NgForm) {
		this.api.postTeam(form)
		.subscribe(res => {
			let id = res['_id'];
			console.log(id);
			this.router.navigate(['/team-details', id]);
		  }, (err) => {
			console.log(err);
		  });
	}

}

export class ArenaDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getArenas();
  }

  disconnect() {

  }
}
