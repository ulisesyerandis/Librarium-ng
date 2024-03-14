import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import UserComponent from './Component/user/user.component';
import StoreComponent from './Component/Store/store.component';
import BookComponent from './Component/book/book.component';
import { BackgroundImageComponent } from './pages/main-page/background-image/background-image.component';
import { HeaderComponent } from './pages/main-page/header/header.component';
import  {NavbarComponent}  from './pages/main-page/navbar/navbar.component';
import { RecommendedBookSectionComponent } from './pages/main-page/recommended-book-section/recommended-book-section.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BestSellingBookSectionComponent } from './pages/main-page/best-selling-book-section/best-selling-book-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [
    CommonModule, RouterOutlet,
    UserComponent, StoreComponent, BookComponent,
    BackgroundImageComponent, HeaderComponent, NavbarComponent,
    RecommendedBookSectionComponent,BookCardComponent,
    BestSellingBookSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Librarium-ng';
}
