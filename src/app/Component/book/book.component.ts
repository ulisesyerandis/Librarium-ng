import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Book } from 'app/Models/Book';
import { BookService } from 'app/Services/BookServices/book.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: 
  [
    CommonModule
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export default class BookComponent implements OnInit 
{
  //  for the CRUD methods values
  bookList: Book[] = [];
  bookToShow: Book | undefined;
  bookDeleted: Book | undefined;
  bookCreated: Book | undefined;
  bookUpdated: Book | undefined;

  public constructor(private bookServices: BookService)
  { }

  ngOnInit(): void 
  {
  //  this.getAllBooks();
  //  this.showBook('3');

  //  const book: Book ={
  //     id: 0,
  //     name: 'camilo ',
  //     author: 'jesus',
  //     year: 1990
  //   }

    // this.updateBook(book, '11');
    // this.createBook(book,'3');
    // this.deleteBook('10', '9999');
  }

  public getAllBooks()
  {
    this.bookServices.getAllBooks().subscribe({
      next: (response: any) => {
        this.bookList = response;
        let id: number = 0;
        let name: string = '';
        let author: string = '';
        let year: number = 0;
        for(let i: number = 0; i < this.bookList.length; i++) 
        {
          console.log('#:'+i);
          id = this.bookList[i].id;
          name = this.bookList[i].name;
          author = this.bookList[i].author;
          year = this.bookList[i].year; 
          console.log(' id - ' + id);
          console.log(' name - ' + name);
          console.log(' author - ' + author);
          console.log(' year - ' + year);
          console.log(' -----------------------' );
        }
      },
      error: (error: any) => {
      console.log('error showing book list');
      },
    });
  }

  public showBook(id: string)
  {
    this.bookServices.showBook(id).subscribe({
      next: (response: any) => {
        this.bookToShow = response;
        console.log('book to show:')
        console.log('id: ' + this.bookToShow?.id);
        console.log('name: ' + this.bookToShow?.name);
        console.log('author: ' + this.bookToShow?.author);
        console.log('year: ' + this.bookToShow?.year);
      },
      error: (error: any) =>{
        console.log('error showing book');
      },
    });
  }

  public createBook(book: Book, store_id: string)
  {
    this.bookServices.createBook(book, store_id).subscribe({
      next: (response: any) => {
        this.bookCreated = response;
        console.log('book created');
        console.log('name: ' + this.bookCreated?.name)
      },
      error: (error: any) => {
        console.log('error creating book');
      }
    })
  }

  public updateBook(book: Book, id: string)
  {
    this.bookServices.updateBook(book, id).subscribe({
      next: (response: any) => {
        this.bookUpdated = response;
        console.log('book updated');
        console.log('name: ' + this.bookUpdated?.name)
      },
      error: (error: any) => {
        console.log('error updating book');
      },
    });
  }

  public deleteBook(id: string, store_id: string)
  {
    this.bookServices.deleteBook(id, store_id).subscribe({
      next: (response: any) => {
        this.bookDeleted = response;
        console.log('book deleted:')
        console.log('id: ' + this.bookDeleted?.id);
        console.log('name: ' + this.bookDeleted?.name);
        console.log('author: ' + this.bookDeleted?.author);
        console.log('year: ' + this.bookDeleted?.year);
      },
      error: (error: any) =>{
        console.log('error deleting book');
      },
    });
  }

}
