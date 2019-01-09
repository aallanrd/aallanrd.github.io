import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from  '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  isLoggedIn$: any;  

  constructor(private api: ApiService) { }
  
  ngOnInit() {
	  this.api.isLoggedIn.subscribe(logged => this.isLoggedIn$ = logged);
	  let token = localStorage.getItem('token');
	  if(token){
		  this.api.setUserLoggedIn(true);
	  }else{
		  this.api.setUserLoggedIn(false);
	  }	  
  }
  
  onLogout(){
	//this.isLoggedIn$ = false;
    this.api.logoutUser();
	this.api.setUserLoggedIn(false);
  }

}
