import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from 'app/Models/Store';

@Injectable({
  providedIn: 'root'
})
export class StoreService 
{

  private http = inject(HttpClient);

  constructor() { }

  //  index()
  public getAllStore()
  {
    return this.http.get('http://localhost:8000/store');
  }

  //  store()
  public createStore(store: Store)
  {
    return this.http.post('http://localhost:8000/store', store);
  }

  //  show()
  public showStore(id: string)
  {
    return this.http.get('http://localhost:8000/store/' + id);
  }

  //  update()
  public updateStore(store: Store, id: string)
  {
    return this.http.put('http://localhost:8000/store/' + id, store);
  }

  //  delete()
  public deleteStore(id: string)
  {
    return this.http.delete('http://localhost:8000/store/' + id);
  }
}
