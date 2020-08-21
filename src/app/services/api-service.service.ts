import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
    private products = [
     {
       id: 1,
       title: 'Acer R3',
       rating: 4,
       desc:  'This dumy data to test the product works',
       price: 8000,
       image: '../../assets/aspire.png',
       listImages: [
         '../../assets/aspire.png',
         '../../assets/aspire.png',
         '../../assets/aspire.png',
         '../../assets/aspire.png'
        ]
     },
     {
      id: 2,
      title: 'Acer R3',
       rating: 4,
      desc:  'This dumy data to test the product works',
      price: 8000,
      image: '../../assets/aspire.png',
      listImages: [
        '../../assets/aspire.png',
        '../../assets/aspire.png',
        '../../assets/aspire.png',
        '../../assets/aspire.png'
       ]
    },
    {
      id: 3,
      title: 'Acer R3',
      rating: 4,
      desc:  'This dumy data to test the product works',
      price: 8000,
      image: '../../assets/aspire.png',
      listImages: [
        '../../assets/aspire.png',
        '../../assets/aspire.png',
        '../../assets/aspire.png',
        '../../assets/aspire.png'
       ]
    },
    {
      id: 4,
      title: 'Acer R3',
      rating: 4,
      desc:  'This dumy data to test the product works',
      price: 8000,
      image: '../../assets/aspire.png',
      listImages: [
        '../../assets/aspire.png',
        '../../assets/aspire.png',
        '../../assets/aspire.png',
        '../../assets/aspire.png'
       ]
    }
   ];

  constructor() { }
  getProducts = () => {
    return this.products;
  }

  signIn = () => {}

  signUp = () => {}

}
