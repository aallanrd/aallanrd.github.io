import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnInit {
	
	arenas: any;
	arena_id:string='';
	
	matcher: any;
	teamForm: FormGroup;
	id:string= '';
	name:string='';
	founded:string='';
	coach:string='';
	ownership:string='';
	affiliations:string='';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

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
			this.arenas = res;
		}, err => {
			console.log(err);
	});
	
    this.getTeam(this.route.snapshot.params['id']);
  }

  getTeam(id) {
    this.api.getTeam(id).subscribe(data => {
      this.id = data._id;
      this.teamForm.setValue({
        name: data.name,
        founded: data.founded,
        coach: data.coach,
        ownership: data.ownership,
        affiliations: data.affiliations,
		arena_id: data.arena_id
      });
    });
  }


  onFormSubmit(form:NgForm) {
    this.api.updateTeam(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
			console.log('THE ID AT UPDATE IS: '+id);
          this.router.navigate(['/team-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  teamDetails() {
    this.router.navigate(['/team-details', this.id]);
  }
}
