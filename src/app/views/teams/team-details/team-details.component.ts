import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
  team = <any>{};

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }
    
  ngOnInit() {
	  this.getTeamDetails(this.route.snapshot.params['id']);
  }
  
  getTeamDetails(id) {
  this.api.getTeam(id)
    .subscribe(data => {
      this.team = data;
    });
  }
  
  deleteTeam(id) {
  this.api.deleteTeam(id)
    .subscribe(res => {
        this.router.navigate(['/teams']);
      }, (err) => {
        console.log(err);
      }
    );
  }  
  
}
