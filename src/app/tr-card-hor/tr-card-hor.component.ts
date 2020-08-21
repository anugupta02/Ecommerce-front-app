import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../model/product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tr-card-hor',
  templateUrl: './tr-card-hor.component.html',
  styleUrls: ['./tr-card-hor.component.scss']
})
export class TrCardHorComponent implements OnInit {

  @Input() product: Product;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onDetailsProduct = (id) => {
    this.router.navigate(['/product', id]);
  }

}
