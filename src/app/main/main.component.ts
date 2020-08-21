import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private categoryList = new Array();

  constructor() {
    this.dumyData();
  }

  ngOnInit() {

  }

  public dumyData = () => {
    let c1= new Category(1,"Category one","");
    let c2= new Category(1,"Category two","");
    let c3= new Category(1,"Category three","");
    let c4= new Category(1,"Category four","");
    let c5= new Category(1,"Category five","");

    // push it 
    this.categoryList.push(c1);
    this.categoryList.push(c2);
    this.categoryList.push(c3);
    this.categoryList.push(c4);
    this.categoryList.push(c5);

  }
}
