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
    new Ingredient("Mangoes", 12),
    new Ingredient("Potatoes", 6),
    new Ingredient("bananas", 9),
    new Ingredient("raspberries", 15),
    new Ingredient("turatura", 11),
    new Ingredient("yippa", 27),
    new Ingredient("andre andre", 20),
  ];

  constructor() { }

  ngOnInit() {
  }

}
