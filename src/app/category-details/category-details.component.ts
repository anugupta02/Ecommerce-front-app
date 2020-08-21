import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../services/api-service.service';
import {Product} from '../model/product';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {

  private products = new Array<Product>();
  private titleCategory = 'Fashion Category';
  panelOpenState = false;

  constructor(private api: ApiServiceService) {
    this.getProductsByCategory();
  }

  ngOnInit() {
  }

  getProductsByCategory = () => {
    this.products = this.api.getProducts();
  }

}
