import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInput: any;
  @ViewChild('amountInput') amountInput: any;

  @Output() ingredientAdd = new EventEmitter<Ingredient>();

  onSelect() {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;

    this.ingredientAdd.emit(new Ingredient(name, amount));
  }
}
