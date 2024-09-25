import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TutorialComponent } from '../tutorial/tutorial.component';
import { BestSellingBookSectionComponent } from '../main-page/best-selling-book-section/best-selling-book-section.component';
import { RegisterComponent } from '../form/register/register.component';
import { BookCardComponent } from 'app/book-card/book-card.component';
import BookComponent from 'app/Component/book/book.component';
import StoreComponent from 'app/Component/Store/store.component';
import UserComponent from 'app/Component/user/user.component';
import { BackgroundImageComponent } from '../main-page/background-image/background-image.component';
import { HeaderComponent } from '../main-page/header/header.component';
import { NavbarComponent } from '../main-page/navbar/navbar.component';
import { RecommendedBookSectionComponent } from '../main-page/recommended-book-section/recommended-book-section.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: 
  [
    UserComponent, StoreComponent, BookComponent,
    BackgroundImageComponent, HeaderComponent, NavbarComponent,
    RecommendedBookSectionComponent,BookCardComponent,
    BestSellingBookSectionComponent, RegisterComponent,
    TutorialComponent, RouterLink, RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export default class LayoutComponent {

  title = 'Librarium-ng';
  register: boolean = false;
}
