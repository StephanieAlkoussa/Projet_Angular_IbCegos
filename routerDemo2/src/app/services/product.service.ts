import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products!:Product[];

  constructor() { 
    this.products=
    [
    {id: 1,name: "phone1",price:100 },
    {id: 2,name: "phone2",price:200 },
    {id: 3,name: "phone3",price:300 }
    ]   
  }

  public getAllProduct(): Observable<Product[]>{
     return of(this.products); 
  }

  public deleteProduct (id:number) : Observable <boolean>{
    //alert ("le produit ayant l'id "+ id + " est supprimé en succès")
    this.products=this.products.filter(product => product.id != id); // si l'id du produit est different de l'id de ma requete, tu garde le produit
    return of (true);
  }
}
