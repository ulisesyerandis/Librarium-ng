import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'app/Models/User';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService 
{
  private http = inject(HttpClient);
  // private newUser!: User;
  // private user: BehaviorSubject<User> = new BehaviorSubject<User>(this.newUser);
  // public alert$ = this.user.asObservable;
  private newUser: User = {
    id: 0,
    name: '',
    email: '',
    password: ''
  }; // Inicializa newUser con un objeto vacío o con valores predeterminados
  private user: BehaviorSubject<User> = new BehaviorSubject<User>(this.newUser);
  public alert$: Observable<User> = this.user.asObservable(); // Agrega () al final de asObservable

  constructor() { }

  public registeredUser(user: User)
  {
    console.log('1- user emited')
    this.user.next(user);
    
  }

  //  index()
  public getAllUsers()
  {
    return this.http.get('http://localhost:8000/user');
  }

  //  store()
  public createUser(user: User, store_id: string)
  {
    return this.http.post('http://localhost:8000/user/' + store_id, user);
  }

  //  show()
  public showUser(id: string)
  {
    return this.http.get('http://localhost:8000/user/' + id);
  }

  //  update()
  public updateUser(user: User, id: string)
  {
    return this.http.put('http://localhost:8000/user/' + id, user);
  }

  //  delete()
  public deleteUser(id: string, store_id: string)
  {
    return this.http.delete('http://localhost:8000/user/' + id + '/' + store_id);
  }
}
