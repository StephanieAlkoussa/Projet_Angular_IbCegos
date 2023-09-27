import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ComponentDemo';
  firstname: any;
  name= 'Smith';
  color : string = 'yellow';
  imagePath : string = "https://media.gettyimages.com/id/94433136/fr/photo/the-old-port-at-sunset-marseille-france.jpg?s=612x612&w=gi&k=20&c=WOy3t__mMwF1MPpQcKiOZ3lRsyIJSj6NuLUWrdjnfMk="
  
  isClient: boolean = true;
  //employee: Employee = 
 // {id:1 , role:'manager', firstname:"robert", lastname: "Martiny"};

 //address: any = {street: 'rue du paradis', city: 'Paris'};

 //TypeScript Array
 months: any= [ "january", "february", "march"];
 days: any= ["Lundi", "Mardi", "Mercredi"];

 expression= "expression1";
 
 onClick() 
 {console.log ("Click ! ");
 }

 value: string ='';
 onKey (event: any) {
  this.value =" Bonjour " + event.target.value;
  }
  onKey2(value: string){
 this.value= 'Bonjour ' + value;
  }

  entry: string = '';
  onBlur (value: string) {
  this.entry ='Blur = ' + value; 
  }

  message: string = '';
  onFocus(){
    this.message= 'l element a gagné le focus.';
  }
  onFocusOut(){
    this.message= 'l element a perdu le focus.';
    //on peut egalement utiliser la directive blur pour l'evennement de perde de focus 
    //onBlur (){
      // this.message= l'element a perdu le focus';
  }

  message2: string ='';
  onMouseOver() {
  
  this.message2= 'La souris est sur l\'element';
}

  onMouseOut() {
    this.message2='La souris pas sur l\'lement';
  }
}


 

