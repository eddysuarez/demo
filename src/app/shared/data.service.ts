import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private products = [
    {id: 1,
    name: 'Huevo',
    category: 'Lorem egg',
    price: 20},
    {
      id: 2,
      name: 'Coca Cola',
      category: 'Lorem Coca cola',
      price: 35
    },
    {
      id: 3,
      name: 'Biscocho',
      category: 'Luyan Biscocho',
      price: 45
    }
  ];
  getAllProducts() {
    return this.products;
  }
  getProductById(id) {
    return this.products.filter((product) => product.id == id);
  }
}
