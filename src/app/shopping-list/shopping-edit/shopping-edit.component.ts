import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

import {Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild( 'inputName' ) inputNameRef : ElementRef;
  @ViewChild( 'inputAmount' ) inputAmountRef : ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() { 
  }

  onAddItem() {
    const nameRef = this.inputNameRef.nativeElement.value;
    const amountRef = this.inputAmountRef.nativeElement.value;
    const newIngredient = new Ingredient(nameRef, amountRef);
    this.ingredientAdded.emit(newIngredient)
  }

}
 