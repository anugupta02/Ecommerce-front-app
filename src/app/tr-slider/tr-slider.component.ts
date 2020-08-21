import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product } from '../model/product';
import { Router } from '@angular/router';
import {ApiServiceService} from '../services/api-service.service';


@Component({
  selector: 'app-tr-slider',
  templateUrl: './tr-slider.component.html',
  styleUrls: ['./tr-slider.component.scss']
})
export class TrSliderComponent implements OnInit {

  @ViewChild('elemToScroll' , { static: false }) public widgetsContent: ElementRef<any>;
  private listItemProduct = new Array<Product>();

  constructor(private router: Router, private api: ApiServiceService) {
    this.getListItemProduct();
  }

  ngOnInit() {
  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 250), behavior: 'smooth' });
  }


  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 250), behavior: 'smooth' });
  }


  getListItemProduct = () => {
    this.listItemProduct = this.api.getProducts();
  }

  goToDetails = (id) => {
    this.router.navigate(['/product', id]);
  }

}
