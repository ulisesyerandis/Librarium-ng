import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Book } from 'app/Models/Book';
import { BookCardComponent } from 'app/book-card/book-card.component';

@Component({
  selector: 'app-recommended-book-section',
  standalone: true,
  imports: 
  [
    CommonModule, BookCardComponent,
  ],
  templateUrl: './recommended-book-section.component.html',
  styleUrl: './recommended-book-section.component.css'
})
export class RecommendedBookSectionComponent implements OnInit 
{

  bookList: Book [] = 
  [
    {id: 1, name:'To Kill a Mockingbird', author:'Harper Lee', year:1960, img: '/assets/img/to kill a mockingbird-1.png'},
    {id: 2, name:'1984', author:'George Orwell', year:1949, img: '/assets/img/1984-1.png'},
    {id: 3, name:'Pride and Prejudice', author:'Jane Austen', year:1813, img: '/assets/img/Pride and Prejudice.jpg'},
    {id: 4, name:'The Great Gatsby', author:'F. Scott Fitzgerald', year:1925, img: '/assets/img/pexels-kampus-production-5940705.jpg'},
    {id: 5, name:'Moby-Dick', author:'Herman Melville', year:1851, img: '/assets/img/pexels-viktoria-alipatova-4038866.jpg'},
    {id: 6, name:'To the Lighthouse', author:'Virginia Woolf', year:1927, img: '/assets/img/pexels-kampus-production-5940705.jpg'},
    {id: 7, name:'The Catcher in the Rye', author:'J.D. Salinger', year:1951, img: '/assets/img/pexels-kampus-production-5940705.jpg'},
    {id: 8, name:'The Lord of the Rings', author:'J.R.R. Tolkien', year:1954, img: '/assets/img/pexels-kampus-production-5940705.jpg'},
    {id: 9, name:'Brave New World', author:' Aldous Huxley', year:1932, img: '/assets/img/pexels-viktoria-alipatova-4038866.jpg'},
    ] 
 price1: number = 99.0;
 price2: number = 49.0;
 price3: number = 69.0;
 price4: number = 345.0;

  ngOnInit(): void 
  {
    this.updateVisiblesBooks();
  }

  currentIndex: number = 0;
  visibleBooks: any[] = [];

  moveCarousel(direccion: number) {
    const numBooks = this.bookList.length;
    const numVisiblesBooks = 3;
  
    if (direccion === -1) {
      this.currentIndex = (this.currentIndex - 3 + numBooks) % numBooks;
    } else if (direccion === 1) {
      this.currentIndex = (this.currentIndex + 3) % numBooks;
    }
  
    this.updateVisiblesBooks();
  }
  

  updateVisiblesBooks() {
    this.visibleBooks = this.bookList.slice(this.currentIndex, this.currentIndex + 3);
  }

}


