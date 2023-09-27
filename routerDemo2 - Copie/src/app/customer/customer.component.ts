import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
customers!: Array <any>;
constructor (private service: CustomerService){

}
  
ngOnInit(): void {
   this.customers=this.service.getAllCustomers(); 
}
handleDeleteCustomer(customer: any) {
  let index =this.customers?.indexOf(customer);
  this.customers.splice(index,1)
}
}
