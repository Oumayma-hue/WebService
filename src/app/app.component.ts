import { Meal } from './models/meal';
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserDataService } from './services/user-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  categories:Meal[];
  constructor(
    private authService: AuthService,
    private userDataService: UserDataService,private http: HttpClient
  ) {}

  ngOnInit() {
    // auto log in user if local storage has the uid returned by firebase
    this.authService.autoLogIn();
    this.http.get<{categories:Meal[]}>('https://www.themealdb.com/api/json/v1/1/categories.php').subscribe(data => {
      console.log(data);
      this.categories = data.categories;
    });
  }
}
