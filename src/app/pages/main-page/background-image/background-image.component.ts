import { Component } from '@angular/core';
import { User } from 'app/Models/User';
import { UsersService } from 'app/Services/UserServices/users.service';

@Component({
  selector: 'app-background-image',
  standalone: true,
  imports: [],
  templateUrl: './background-image.component.html',
  styleUrl: './background-image.component.css'
})
export class BackgroundImageComponent 
{
  constructor(private usersService: UsersService)
  {}

ngOnInit()
{
  this.usersService.alert$.subscribe(response =>{
    if(response)
      {
        const user: User = {
      name: response.name,
      email: response.email,
      password: response.password,
      id: 0
    }
    console.log('user => '+ user?.name + " subscribed")
    console.log(response)
      }
    
  });

}
}
