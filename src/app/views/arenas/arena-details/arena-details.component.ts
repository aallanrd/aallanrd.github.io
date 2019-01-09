import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-arena-details',
  templateUrl: './arena-details.component.html',
  styleUrls: ['./arena-details.component.css']
})
export class ArenaDetailsComponent implements OnInit {
  arena = <any>{};

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }
  
  ngOnInit() {
	  this.getArenaDetails(this.route.snapshot.params['id']);
  }
  
  getArenaDetails(id) {
  this.api.getArena(id)
    .subscribe(data => {
      this.arena = data;
    });
  }
  
  deleteArena(id) {
  this.api.deleteArena(id)
    .subscribe(res => {
        this.router.navigate(['/arenas']);
      }, (err) => {
        console.log(err);
      }
    );
  }

}
