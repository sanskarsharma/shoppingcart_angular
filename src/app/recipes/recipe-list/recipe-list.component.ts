import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [ 
  new Recipe("TestRecipe", "Test Recipe description", "http://ksmartstatic.sify.com/cmf-1.0.0/appflow/bawarchi.com/Adlet/pk4qbtcgbciej.jpg"),
  new Recipe("TestRecipe", "Test Recipe description", "http://ksmartstatic.sify.com/cmf-1.0.0/appflow/bawarchi.com/Adlet/pk4qbtcgbciej.jpg")
];

  constructor() { }

  ngOnInit() {
  }

}
