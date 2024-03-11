import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from 'app/Models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService 
{
  private http = inject(HttpClient);

  constructor() { }

   //  index()
   public getAllBooks()
   {
     return this.http.get('http://localhost:8000/book');
   }
 
   //  store()
   public createBook(book: Book, store_id: string)
   {
     return this.http.post('http://localhost:8000/book/' + store_id, book);
   }
 
   //  show()
   public showBook(id: string)
   {
     return this.http.get('http://localhost:8000/book/' + id);
   }
 
   //  update()
   public updateBook(book: Book, id: string)
   {
     return this.http.put('http://localhost:8000/book/' + id, book);
   }
 
   //  delete()
   public deleteBook(id: string, store_id: string)
   {
     return this.http.delete('http://localhost:8000/book/' + id + '/' + store_id);
   }
}
