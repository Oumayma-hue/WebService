import { Component, OnInit } from '@angular/core';
import { Meal } from '../models/meal';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'meal-categories';
  categories: Category[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getMealCategories();
  }

  getMealCategories(): void {
    this.http
      .get<{ categories: Category[] }>('https://www.themealdb.com/api/json/v1/1/categories.php')
      .subscribe((response) => {
        this.categories = response.categories;
      });
  }
}
