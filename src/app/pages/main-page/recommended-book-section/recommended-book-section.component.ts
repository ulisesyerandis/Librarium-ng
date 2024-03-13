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
    {id: 1, name:'nombre 1', author:'author1', year:2000, img: '/assets/img/pexels-viktoria-alipatova-4038866.jpg'},
    {id: 2, name:'nombre 2', author:'author2', year:2020, img: '/assets/img/pexels-kampus-production-5940705.jpg'},
    {id: 3, name:'nombre 3', author:'author3', year:2022, img: '/assets/img/pexels-kampus-production-5940705.jpg'},
    {id: 4, name:'nombre 4', author:'author4', year:1920, img: '/assets/img/pexels-kampus-production-5940705.jpg'},
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
  VisiblesBooks: any[] = [];

  moverCarrusel(direccion: number) {
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
    this.VisiblesBooks = this.bookList.slice(this.currentIndex, this.currentIndex + 3);
  }

}


