import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from 'app/Models/User';
import { UsersService } from 'app/Services/UserServices/users.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: 
  [
    CommonModule, ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent 
{

  formUser = new FormGroup({
    'name': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),

  });

  constructor(private usersService: UsersService)
  {}

  register() 
  {
//       const name = this.formUser.get('name')?.value;
//       const email = this.formUser.get('email')?.value;
//       const password = this.formUser.get('password')?.value;
  
//       if (typeof name === 'string' && typeof email === 'string' && typeof password === 'string') {
//         const user: User = {
//           name: name,
//           email: email,
//           password: password,
//           id: 0
//         };
    
//    this.usersService.registeredUser(user);
  
// }
// console.log('hello world!');

}

}