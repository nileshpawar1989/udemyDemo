import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes : Recipe[] = [
    new Recipe('test1', 'test Des1c', 'https://images.media-allrecipes.com/images/56589.png'),
    new Recipe('test2', 'test Desc2', 'https://images.media-allrecipes.com/images/56589.png')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe : Recipe){
    console.log("List");
    this.recipeWasSelected.emit(recipe);
  }

}
