import { Component, OnInit } from '@angular/core';
import { MealApiService } from '../meal-api.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  categories: any[] = [];
  mealsByCategory: any = {};
  selectedRecipe: any = null;
  instructions: string | null = null;

  constructor(private mealApiService: MealApiService) {}

  ngOnInit(): void {
    this.mealApiService.getCategories().subscribe((response: any) => {
      this.categories = response.categories;
      this.categories.forEach((category) => {
        this.mealApiService.getMealsByCategory(category.strCategory).subscribe((response: any) => {
          this.mealsByCategory[category.strCategory] = response.meals;
        });
      });
    });
  }
  scrollToCategory(categoryId: string): void {
    const categoryElement = document.getElementById(categoryId);
    if (categoryElement) {
      categoryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  showRecipe(mealId: string): void {
    this.mealApiService.getMealById(mealId).subscribe((response: any) => {
      if (response && response.meals && response.meals.length > 0) {
        this.selectedRecipe = response.meals[0];
      } else {
        this.selectedRecipe ='Aucune recette trouvée pour cet ID de repas.';
      }
    });


  }

}

