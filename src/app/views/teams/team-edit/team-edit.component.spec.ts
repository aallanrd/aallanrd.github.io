import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { TeamEditComponent } from './team-edit.component';

import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatDatepickerModule, MatIconModule, MatSelectModule } from "@angular/material";
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

import { ApiService } from '../../../api.service';

const dummyTeam: any = 
{
	name: 'Team 1',
	founded : new Date('01/01/1989'),
	ownership: 'Owner #1',
	coach: 'Coach One',
	affiliations: 'Affiliations of 1',
	arena_id: '123abc123abc',
	_id: '12345678'
}

const dummyArenas: any[] = 
[{
	name: 'Arena 1',
	opened : new Date('01/01/1999'),
	cost: 98000000,
	location: 'Arena Location',
	address: 'Arena Address',
	capacity: 15800,
	_id: '123abc123abc'
},
{
	name: 'Arena 2',
	opened : new Date('01/01/1999'),
	cost: 135000000,
	location: 'Arena Location',
	address: 'Arena Address',
	capacity: 19500,
	_id: '12345abc12345'
}];

class FakeApiService {
	getTeam(id){
		return of(dummyTeam);
	}
	
	getArenas(){
		return of(dummyArenas);
	}
}


describe('TeamEditComponent', () => {
  let component: TeamEditComponent;
  let fixture: ComponentFixture<TeamEditComponent>;

  beforeEach(async(() => {
	let injector;
	let api: ApiService;
	
    TestBed.configureTestingModule({
	  providers: [ { provide: ApiService, useClass: FakeApiService } ],	
      declarations: [ TeamEditComponent ], 
	  imports: [
		  RouterModule, 
		  RouterTestingModule,
		  HttpClientTestingModule, 
		  FormsModule,
		  ReactiveFormsModule,
		  MatInputModule,
		  MatDatepickerModule,
		  MatIconModule,
		  MatSelectModule,
		  MatMomentDateModule,
		  BrowserAnimationsModule
	  ]
    })
    .compileComponents();
	
	injector = getTestBed();
	api = injector.get(ApiService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
    
  describe('#ngOnInit', () => {
    it('Should load existing Team. Form should be valid and Submit enabled.', () => {
      component.ngOnInit();
	  let submitButton = fixture.debugElement.query(By.css('#teamSubmitBtn')).nativeElement;
	  fixture.detectChanges();
	  expect(component.teamForm.valid && !submitButton.disabled).toBeTruthy();
    });
  });
  
  it('Team form should be invalid && Submit button disabled. If: Date field has invalid format.', async(() => {
	  component.teamForm.controls['name'].setValue('Staples Center');
	  component.teamForm.controls['founded'].setValue('not_a_date');
	  component.teamForm.controls['ownership'].setValue(1500000);
	  component.teamForm.controls['coach'].setValue('Los Angeles');
	  component.teamForm.controls['affiliations'].setValue('Full Address');
	  let submitButton = fixture.debugElement.query(By.css('#teamSubmitBtn')).nativeElement;
	  fixture.detectChanges();
	  expect(!component.teamForm.valid && submitButton.disabled).toBeTruthy();
  }));
  
  it('Team form should be invalid && Submit button disabled. If: Fields are empty.', async(() => {
	  component.teamForm.controls['name'].setValue('');
	  component.teamForm.controls['founded'].setValue('');
	  component.teamForm.controls['ownership'].setValue(0);
	  component.teamForm.controls['coach'].setValue('');
	  component.teamForm.controls['affiliations'].setValue('');
	  let submitButton = fixture.debugElement.query(By.css('#teamSubmitBtn')).nativeElement;
	  fixture.detectChanges();
	  expect(!component.teamForm.valid && submitButton.disabled).toBeTruthy();
  }));
});
