import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersService } from '../../app/services/users.service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  usersList:any;

  constructor(public navCtrl: NavController, private usersService: UsersService) {
    
    usersService.getUsers().subscribe((data) => {
      this.usersList = data.results;
    });
  }

  sendMessage(i) {
  	this.usersList.splice(i,1);
  }

}