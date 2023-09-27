import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers!: Array<any>;
  constructor() {
    this.customers=
    [
      {id: 1,name: "customer1"},
      {id: 2,name: "customer2"},
      {id: 3,name: "customer3"}
      ]
   }

   public getAllCustomers() {
    return this.customers;
   }
}
