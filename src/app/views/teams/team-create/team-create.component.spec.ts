import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { TeamCreateComponent } from './team-create.component';

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

const dummyArenas: any[] = 
[{
	name: 'Arena1',
	opened : '01/01/1999',
	cost: 150000000,
	location: 'Arena Location',
	address: 'Arena Address',
	capacity: 21000
}];

class FakeArenasApiService {
	getArenas(){
		return of(dummyArenas);
	}
}

describe('TeamCreateComponent', () => {
  let component: TeamCreateComponent;
  let fixture: ComponentFixture<TeamCreateComponent>;

  beforeEach(async(() => {
	let injector;
	let api: ApiService;
	
    TestBed.configureTestingModule({
	  providers: [ { provide: ApiService, useClass: FakeArenasApiService } ],
      declarations: [ TeamCreateComponent ],
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
    fixture = TestBed.createComponent(TeamCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  describe('#ngOnInit', () => {
    it('should load the Arenas', () => {
      component.ngOnInit();
      component.arenas.subscribe(arenas => {
        expect(arenas.length).toBe(1);
        expect(arenas).toEqual(dummyArenas);
      });
    });
  });

  it('Arena form should be invalid && Submit button disabled. If: Date field has invalid format.', async(() => {
	  component.teamForm.controls['name'].setValue('LA Lakers');
	  component.teamForm.controls['founded'].setValue('not-a-date');
	  component.teamForm.controls['coach'].setValue('Coach');
	  component.teamForm.controls['ownership'].setValue('Owners');
	  component.teamForm.controls['affiliations'].setValue('Affiliations');
	  component.teamForm.controls['arena_id'].setValue('arena12345');
	  let submitButton = fixture.debugElement.query(By.css('#teamSubmitBtn')).nativeElement;
	  fixture.detectChanges();
	  expect(!component.teamForm.valid && submitButton.disabled).toBeTruthy();
  }));
  
  it('Arena form should be valid && Submit button enabled. If: All fields are valid.', async(() => {
	  component.teamForm.controls['name'].setValue('LA Lakers');
	  component.teamForm.controls['founded'].setValue(new Date('05/01/1995'));
	  component.teamForm.controls['coach'].setValue('Coach');
	  component.teamForm.controls['ownership'].setValue('Owners');
	  component.teamForm.controls['affiliations'].setValue('Affiliations');
	  component.teamForm.controls['arena_id'].setValue('arena12345');
	  let submitButton = fixture.debugElement.query(By.css('#teamSubmitBtn')).nativeElement;
	  fixture.detectChanges();
	  expect(component.teamForm.valid && !submitButton.disabled).toBeTruthy();
  }));
});
