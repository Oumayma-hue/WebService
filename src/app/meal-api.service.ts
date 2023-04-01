import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealApiService {
  private baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories.php`);
  }

  getMealsByCategory(category: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/filter.php?c=${category}`);
  }
}
