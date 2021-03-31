import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  arrayProducts: Product[];

  constructor() {
    this.arrayProducts = [];
    this.arrayProducts.push({
      name: 'ส้มโอ',
      price: 990,
      image:'../assets/img/ส้มโอทับทิมสยาม.jfif'
      });
    this.arrayProducts.push({
      name: 'แตงโม',
      price: 1000,
      image:'../assets/img/แตงโม.jfif'
      });
    this.arrayProducts.push({
      name: 'มะพร้าวน้ำหอม',
      price: 500,
      image:'../assets/img/มะพร้าว.jfif'
      });

  }

  ngOnInit(): void {
  }

  selectedProduct(arrayProducts:Product){
    alert(`สินค้า ${arrayProducts.name} ถูกเลือก`);
  }
}
