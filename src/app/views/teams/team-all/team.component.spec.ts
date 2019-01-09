import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { TeamComponent } from './team.component';

import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { MatTableModule } from "@angular/material";
import { RouterTestingModule } from '@angular/router/testing';

import { ApiService } from '../../../api.service';

const dummyTeams: any[] = 
[{
	name: 'Team 1',
	founded : new Date('01/01/1989'),
	ownership: 'Owner #1',
	coach: 'Coach One',
	affiliations: 'Affiliations of 1',
	arena_id: '111222333444555',
	_id: '12345678'
},
{
	name: 'Team 2',
	founded : new Date('01/01/1999'),
	ownership: 'Owner #1',
	coach: 'Coach Two',
	affiliations: 'Affiliations of 2',
	arena_id: 'aaabbbccc111222333',
	_id: 'abcdefgh'
}];

class FakeTeamsApiService {
	getTeams(){
		return of(dummyTeams);
	}
}

describe('TeamComponent', () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;

  beforeEach(async(() => {
	let injector;
	let api: ApiService;
	
    TestBed.configureTestingModule({
	  providers: [ { provide: ApiService, useClass: FakeTeamsApiService } ],
      declarations: [ TeamComponent ],
	  imports: [
		  RouterModule, 
		  RouterTestingModule,
		  HttpClientTestingModule, 
		  MatTableModule
	  ]
    })
    .compileComponents();
	
	injector = getTestBed();
	api = injector.get(ApiService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  describe('#ngOnInit', () => {
    it('should load the Teams', () => {
      component.ngOnInit();
      component.teams.subscribe(teams => {
        expect(teams.length).toBe(2);
        expect(teams).toEqual(dummyTeams);
      });
    });
  });
});
