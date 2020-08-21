import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import {ActionHandlerService} from '../services/action-handler.service';

@Component({
  selector: 'app-item-product-details',
  templateUrl: './item-product-details.component.html',
  styleUrls: ['./item-product-details.component.scss']
})
export class ItemProductDetailsComponent implements OnInit {

  private listImageProduct = new Array<string>();
  private wishList = new Array<Product>();
  private quntityValue = 1;
  private currentProduct: Product;
  private imageTest = '../../assets/aspire.png';


  constructor(private actionHandler: ActionHandlerService) { }

  ngOnInit() {
    this.listImageProduct.push(this.imageTest);
  }

  getProductDetails = () => {}

  increase = () => {
    this.quntityValue = this.quntityValue + 1;
    console.log(this.quntityValue);
  }

  decrease = () => {
    if (this.quntityValue > 1) {
    this.quntityValue = this.quntityValue - 1;
    console.log(this.quntityValue);
    }
  };

  addToBag = () => {
    this.actionHandler.onAddItemToBag(1);
  }

}
