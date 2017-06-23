import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'contact-root',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  
  usersList: any;

  constructor(private usersService: UsersService) {
    
    usersService.getUsers().subscribe((data) => {
      this.usersList = data.results;
    });
  }
}
