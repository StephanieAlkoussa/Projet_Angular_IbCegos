import { Component, OnInit } from '@angular/core';
import { Employe } from './employe.model'; //ctrl + . ==> pour impoter des fichier 
import { EMPLOYE } from './EMPLOYE';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  employes?: Employe [];//variable employe: attribut de Employe [] (tableau)
  
  ngOnInit(): void {  // ngOnInit: appelé après la création d'un composant, utilisé pour initialiser des données, appeler des services, etc... 
    this.employes=EMPLOYE; //
  }

  title = 'app01';



selectEmploye(employe:Employe){
  alert(employe.name) // pop up avec le nom de l'employe
}

}
