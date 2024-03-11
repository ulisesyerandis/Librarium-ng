import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'app/Models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService 
{
  private http = inject(HttpClient);

  constructor() { }

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
