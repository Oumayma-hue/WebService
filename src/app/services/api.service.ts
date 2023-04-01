import { Meal } from './../models/meal';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private db: AngularFireDatabase, private http: HttpClient) {}

  getMealCategories() {
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    return this.http.get('https://www.themealdb.com/api/json/v1/1/categories.php').subscribe(data => {
      console.log(data);
    });
  }

  getMealCategoriesFromFirebase() {
    // Récupérez les données de Firebase
    return this.db.list('/meal-categories').valueChanges();
  }
}
