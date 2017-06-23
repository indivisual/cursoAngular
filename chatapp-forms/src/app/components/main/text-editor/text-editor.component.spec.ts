import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorComponent } from './text-editor.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from '../../../app.component';
import { StoreModule } from "@ngrx/store";
import {AngularFireModule} from "angularfire2";
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MainComponent } from '../../../components/main/main.component';
import { FormComponent } from '../../../components/form/form.component';
import { mainStoreReducer } from "../../../state-management/reducers/main.reducer";

import {environment} from "../../../../environments/environment";
import {MessagesService} from "../../../services/messages.service";

describe('TextEditorComponent', () => {
  let component: TextEditorComponent;
  let fixture: ComponentFixture<TextEditorComponent>;
  let messagesServicesMock = {
    pushMessage: jasmine.createSpy('pushMessage');
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextEditorComponent ],
      imports: [
        FormsModule,
        StoreModule.provideStore( { mainStoreReducer }),
        HttpModule,
        AngularFireModule.initializeApp(environment.firebase),
        AgmCoreModule.forRoot({apiKey: 'AIzaSyBTHsJPaZ-MYlCvrhwPwLFtDzOxFJEdaRc'}) 
      ],
      providers: [{ provide: MessagesService, use:messagesServicesMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('resetform works fine',() => {
    component['username'] = 'hehe';
    component['message'] = 'hehe';
    component.resetForm();
    fixture.detectChanges();
    expect(component['username']).toBe('');
    expect(component['message']).toBe('');
  });

  
  fit('validateMessage works fine',() => {
    component['username'] = '';
    component['message'] = '';
    fixture.detectChanges();
    expect(component.validateMessage()).toBe(false);

    component['username'] = 'asdasdasda';
    component['message'] = '';
    fixture.detectChanges();
    expect(component.validateMessage()).toBe(false);

    component['username'] = '';
    component['message'] = 'adasdada';
    fixture.detectChanges();
    expect(component.validateMessage()).toBe(false);

    component['username'] = 'sdfsdfsdfs';
    component['message'] = 'adasdada';
    fixture.detectChanges();
    expect(component.validateMessage()).toBe(true);
    
  });

  fit('sendMessage works fine',() => {
    spyOn(component.sendMessage(), 'getUsers').and.returnValue(745);
    
    fixture.detectChanges();

    expect(messagesServicesMock.pushMessage()).toHaveBeenCalled();
  });




});
