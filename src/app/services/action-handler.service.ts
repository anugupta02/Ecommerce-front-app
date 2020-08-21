import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionHandlerService {

  private messageSource = new BehaviorSubject(0);
  currentMessage = this.messageSource.asObservable();
  
  constructor() { }

  public onAddItemToBag(item) {
    this.messageSource.next(item);
  }
}
