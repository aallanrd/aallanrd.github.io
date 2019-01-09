import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-arena-edit',
  templateUrl: './arena-edit.component.html',
  styleUrls: ['./arena-edit.component.css']
})
export class ArenaEditComponent implements OnInit {
	
	matcher: any;
	arenaForm: FormGroup;
	id:string= '';
	name:string='';
	opened:string='';
	cost:number=0;
	location:string='';
	address:string='';
	capacity:number=0;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
	this.arenaForm = this.formBuilder.group({
	'name' : [null, Validators.required],
	'opened' : [null, Validators.required],
	'cost' : [null, [Validators.required,Validators.maxLength(12)]],
	'location' : [null, Validators.required],
	'address' : [null, Validators.required],
	'capacity' : [null, [Validators.required,Validators.maxLength(6)]]
	});
    this.getArena(this.route.snapshot.params['id']);
  }

  getArena(id) {
    this.api.getArena(id).subscribe(data => {
      this.id = data._id;
      this.arenaForm.setValue({
        name: data.name,
        opened: data.opened,
        cost: data.cost,
        location: data.location,
        address: data.address,
        capacity: data.capacity
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.updateArena(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
			console.log('THE ID AT UPDATE IS: '+id);
          this.router.navigate(['/arena-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  arenaDetails() {
    this.router.navigate(['/arena-details', this.id]);
  }
}