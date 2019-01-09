import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit {
	teams: Observable<any[]>;
	displayedColumns = ['name', 'founded', 'coach','ownership','affiliations'];
	dataSource = new TeamDataSource(this.api);
	
	constructor(private api: ApiService) { }
	
	ngOnInit() {
		this.api.getTeams()
		.subscribe(res => {
			this.teams = of(res);
		}, err => {
			console.log(err);
		});
	}
}

export class TeamDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getTeams();
  }

  disconnect() {

  }
}