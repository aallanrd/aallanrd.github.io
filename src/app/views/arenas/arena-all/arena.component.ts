import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})

export class ArenaComponent implements OnInit {
	arenas: Observable<any[]>;
	displayedColumns = ['name', 'opened', 'cost','location'];
	dataSource = new ArenaDataSource(this.api);
	
	constructor(private api: ApiService) { }
	
	ngOnInit() {
		this.api.getArenas()
		.subscribe(res => {
			this.arenas = of(res);
		}, err => {
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