import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArenaCreateComponent } from './arena-create.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatDatepickerModule } from "@angular/material";
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('ArenaCreateComponent', () => {
  let component: ArenaCreateComponent;
  let fixture: ComponentFixture<ArenaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArenaCreateComponent ],	  
	  imports: [
		  RouterModule, 
		  RouterTestingModule,
		  HttpClientModule, 
		  FormsModule,
		  ReactiveFormsModule,
		  MatInputModule,
		  MatDatepickerModule,
		  MatMomentDateModule,
		  BrowserAnimationsModule
	  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArenaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('Arena form should be valid && Submit button enabled. If: All fields are valid.', async(() => {
	  component.arenaForm.controls['name'].setValue('Staples Center');
	  component.arenaForm.controls['opened'].setValue(new Date('05/06/1999'));
	  component.arenaForm.controls['cost'].setValue(1500000);
	  component.arenaForm.controls['location'].setValue('Los Angeles');
	  component.arenaForm.controls['address'].setValue('Full Address');
	  component.arenaForm.controls['capacity'].setValue(21000);
	  let submitButton = fixture.debugElement.query(By.css('#arenaSubmitBtn')).nativeElement;
	  fixture.detectChanges();
	  expect(component.arenaForm.valid && !submitButton.disabled).toBeTruthy();
  }));
  
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
  
});
