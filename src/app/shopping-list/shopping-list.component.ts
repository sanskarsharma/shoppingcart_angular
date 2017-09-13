import { Component, OnInit } from '@angular/core';

import {Ingredient} from '../common/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[]= [
    new Ingredient("Apples",10),
    new Ingredient("Mangoes", 12)
  ];

  constructor() { }

  ngOnInit() {
  }

}
