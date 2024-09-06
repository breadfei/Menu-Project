import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from './models/menu-item';

let totalPrice = 0;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bread Bank';
  menuList: MenuItem[] = [
    {name: "Baguette", category: "Long", price: 9.99, vegetarian: true, soldOut: false},
    {name: "Brioche", category: "Bun", price: 8.99, vegetarian: true, soldOut: false},
    {name: "Whole wheat", category: "Loaf", price: 4.99, vegetarian: true, soldOut: false},
    {name: "Gluten free", category: "Loaf", price: 5.99, vegetarian: true, soldOut: true},
    {name: "Texas toast", category: "Toast", price: 8.99, vegetarian: true, soldOut: false},
    {name: "Gluten free", category: "Loaf", price: 5.99, vegetarian: true, soldOut: false},
    {name: "Potato bread", category: "Potato", price: 10.99, vegetarian: true, soldOut: false}
  ]
}
