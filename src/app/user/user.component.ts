import { Component, OnInit } from '@angular/core';
import { RandomUserService } from '../random-user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  user : any;

  constructor(private userService:RandomUserService) {}

  ngOnInit(){
    this.userService.getUser()
      .subscribe( res => {
        this.user = res;
        this.user = this.user.results[0];
      });
  }
}
