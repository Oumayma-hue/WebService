import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './global/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './global/loader/loader.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
// Import Angular Material modules

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';

import { environment } from 'src/environments/environment';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { NotFoundComponent } from './global/not-found/not-found.component';
import { StartersIconComponent } from './global/starters-icon/starters-icon.component';
import { MainsIconComponent } from './global/mains-icon/mains-icon.component';
import { AuthGuard } from './route-guards/auth-guard.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CategoryPageComponent } from './category-page/category-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MealApiService } from './meal-api.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

const routes: Routes = [
  { path: 'menu-page', component: CategoryPageComponent },
  { path: '', redirectTo: '/menu-page', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoaderComponent,
    LoginComponent,
    SignupComponent,
    UserProfileComponent,
     NotFoundComponent,
    StartersIconComponent,
    MainsIconComponent,
    CategoryPageComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAnalyticsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
