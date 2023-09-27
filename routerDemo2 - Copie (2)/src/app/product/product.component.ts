import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  products!: Product[];
  errorMessage!: string; 
constructor (private service: ProductService) {

}

ngOnInit (): void {
  this.handleGetAllProduct();
}
handleGetAllProduct (){
  this.service.getAllProduct().subscribe(
  {
    next : data => {this.products=data} ,// next: signifie que si tout va bien , observable gère le flux de donnés
    error: err => {this.errorMessage= err;}
    }
  );
}

handleDeleteProduct (product: Product) {
  // let index =this.products?.indexOf(product);
  // this.products.splice(index,1);
  let conf= confirm("vous etes sure de supprime le produit?") // confirm(): fonction en javascript
  if (conf ==false) return ;
  this.service.deleteProduct(product.id).subscribe(
    {next : data => {this.handleGetAllProduct();}
  }
  );
}
}
