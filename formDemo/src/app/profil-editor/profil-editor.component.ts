import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profil-editor',
  templateUrl: './profil-editor.component.html',
  styleUrls: ['./profil-editor.component.less']
})

export class ProfilEditorComponent {

  constructor(private fb: FormBuilder) {
  }


    profileForm= this.fb.group ({
    firstName: ['', Validators.required], // si le first name n'est pas saisit; il n'est pas considérer comme valide
    lastName: [''],
    adresse: this.fb.group ({
      rue: [''],
      ville: [''],
      codePostal: ['']
    }),
    aliases: this.fb.array([this.fb.control('')])
    }
  ); 

  get aliases(){
    return this.profileForm.get('aliases')as FormArray;
  }

  addAlias () {
    this.aliases.push(this.fb.control(''));
  } 

  
  onSubmit() {
    console.warn(this.profileForm.value);
  }

  updateProfile(){
    this.profileForm.patchValue ({ //patch au lieu de put pour modifier uniquement les champs renseignés
      firstName: 'Nancy',
      adresse: {rue: 'rue du prado'} //change uniquement la rue et ne toute pas les autre variable de la propriétéadresse
    })
  }
}
