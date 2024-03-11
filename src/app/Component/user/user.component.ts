import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from 'app/Models/User';
import { UsersService } from 'app/Services/UserServices/users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: 
  [
    CommonModule,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export default class UserComponent implements OnInit 
{
  //  for the CRUD methods values
  userList: User[] = [];
  userToShow: User | undefined;
  userDeleted: User | undefined;
  userCreated: User | undefined;
  userUpdated: User | undefined;

  public constructor(private userServices: UsersService)
  { }

  ngOnInit(): void 
  {
    this.getAllUsers();
    // this.showUser('222');
    
    const user: User ={
      id: 0,
      name: 'marc a. ter stegen',
      email: 'ter@example.com',
      password: '1234'
    }

    // this.updateUser(user, '71');
    // this.createUser(user,'1');
    // this.deleteUser('222', '1');

  }

  public getAllUsers()
  {
    this.userServices.getAllUsers().subscribe({
      next: (response: any) => {
        this.userList = response;
        let id: string = '';
        let name: string = '';
        let email: string = '';
        let password: string = '';
        for(let i: number = 0; i < this.userList.length; i++) 
        {
          console.log('#:'+i);
          id = this.userList[i].id + '';
          name = this.userList[i].name;
          email = this.userList[i].email;
          password = this.userList[i].password; 
          console.log(' id - ' + id);
          console.log(' name - ' + name);
          console.log(' email - ' + email);
          console.log(' password - ' + password);
          console.log(' -----------------------' );
        }
      },
      error: (error: any) => {
      console.log('error showing user list');
      },
    });
  }

  public showUser(id: string)
  {
    console.log('-----------showing user---------');
    this.userServices.showUser(id).subscribe({
      next: (response: any) => {
        if(response.name)
        {
          this.userToShow = response;
        console.log('user to show:')
        console.log('id: ' + this.userToShow?.id);
        console.log('name: ' + this.userToShow?.name);
        console.log('email: ' + this.userToShow?.email);
        console.log('password: ' + this.userToShow?.password);
        }else
        {
        console.log('response  = ' + response);
        } 
        
      },
      error: (error: any) =>{
        console.log('error showing user');
      },
    });
  }

  public createUser(user: User, store_id: string)
  {
    console.log('-----------create user---------');
    this.userServices.createUser(user, store_id).subscribe({
      next: (response: any) => {   
        if(response.name)
        {
           this.userCreated = response;
        console.log('user created');
        console.log('name: ' + this.userCreated?.name)
        }else
        {
        console.log('response  = ' + response);
        }       
      },
      error: (error: any) => {
        console.log('error creating user', error.error);
        console.log('error message', error.message);
      },
    });
  }

  public updateUser(user: User, id: string)
  {
    console.log('-----------updating user---------');
    this.userServices.updateUser(user, id).subscribe({
      next: (response: any) => {
        if(response.name)
        {
          this.userUpdated = response;
          console.log('user updated');
        console.log('name: ' + this.userUpdated?.name)
        }else
        {
        console.log('response  = ' + response);
        } 
        
      },
      error: (error: any) => {
        console.log('error updating user');
      },
    });
  }

  public deleteUser(id: string, store_id: string)
  {
    console.log('-----------deleting user---------');
    this.userServices.deleteUser(id, store_id).subscribe({
      next: (response: any) => {
        if(response.name)
        {
          this.userDeleted = response;
        console.log('user deleted:')
        console.log('id: ' + this.userDeleted?.id);
        console.log('name: ' + this.userDeleted?.name);
        console.log('email: ' + this.userDeleted?.email);
        console.log('password: ' + this.userDeleted?.password);
        }else
        {
        console.log('response  = ' + response);
        } 
        
      },
      error: (error: any) =>{
        console.log('error deleting user');
      },
    });
  }
}
