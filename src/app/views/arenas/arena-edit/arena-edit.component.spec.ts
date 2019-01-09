import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { ArenaEditComponent } from './arena-edit.component';

import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatDatepickerModule, MatIconModule } from "@angular/material";
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

import { ApiService } from '../../../api.service';

const dummyArena: any = 
{
	name: 'Arena Example',
	opened : new Date('01/01/1999'),
	cost: 150000000,
	location: 'Arena Location',
	address: 'Arena Address',
	capacity: 21000,
	_id: 'abcdefg123456'
}

class FakeArenasApiService {
	getArena(id){
		return of(dummyArena);
	}
}

describe('ArenaEditComponent', () => {
  let component: ArenaEditComponent;
  let fixture: ComponentFixture<ArenaEditComponent>;

  beforeEach(async(() => {
	let injector;
	let api: ApiService;
	
    TestBed.configureTestingModule({
	  providers: [ { provide: ApiService, useClass: FakeArenasApiService } ],	
      declarations: [ ArenaEditComponent ],	  
	  imports: [
		  RouterModule, 
		  RouterTestingModule,
		  HttpClientTestingModule, 
		  FormsModule,
		  ReactiveFormsModule,
		  MatInputModule,
		  MatDatepickerModule,
		  MatIconModule,
		  MatMomentDateModule,
		  BrowserAnimationsModule
	  ]
    })
    .compileComponents();
	
	injector = getTestBed();
	api = injector.get(ApiService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArenaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  describe('#ngOnInit', () => {
    it('Should load existing Arena. Form should be valid and Submit enabled.', () => {
      component.ngOnInit();
	  let submitButton = fixture.debugElement.query(By.css('#arenaSubmitBtn')).nativeElement;
	  fixture.detectChanges();
	  expect(component.arenaForm.valid && !submitButton.disabled).toBeTruthy();
    });
  });
  
  it('Arena form should be invalid && Submit button disabled. If: Date field has invalid format.', async(() => {
	  component.arenaForm.controls['name'].setValue('Staples Center');
	  component.arenaForm.controls['opened'].setValue('not_a_date');
	  component.arenaForm.controls['cost'].setValue(1500000);
	  component.arenaForm.controls['location'].setValue('Los Angeles');
	  component.arenaForm.controls['address'].setValue('Full Address');
	  component.arenaForm.controls['capacity'].setValue(21000);
	  let submitButton = fixture.debugElement.query(By.css('#arenaSubmitBtn')).nativeElement;
	  fixture.detectChanges();
	  expect(!component.arenaForm.valid && submitButton.disabled).toBeTruthy();
  }));
  
  it('Arena form should be invalid && Submit button disabled. If: Fields are empty.', async(() => {
	  component.arenaForm.controls['name'].setValue('');
	  component.arenaForm.controls['opened'].setValue('');
	  component.arenaForm.controls['cost'].setValue(0);
	  component.arenaForm.controls['location'].setValue('');
	  component.arenaForm.controls['address'].setValue('');
	  component.arenaForm.controls['capacity'].setValue(0);
	  let submitButton = fixture.debugElement.query(By.css('#arenaSubmitBtn')).nativeElement;
	  fixture.detectChanges();
	  expect(!component.arenaForm.valid && submitButton.disabled).toBeTruthy();
  }));

  
});
