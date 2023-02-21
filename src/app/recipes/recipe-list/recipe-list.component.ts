import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("Test Recipe", "Recipe desc", "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-12-2048x1267.jpg"),
    new Recipe("Recipe 2", "desc 2", "https://static.toiimg.com/thumb/53110049.cms?imgsize=148092&width=509&height=340")
  ];

  ngOnInit(){

  }

  constructor(){

  }
}
