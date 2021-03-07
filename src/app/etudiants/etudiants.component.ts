import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
 
  etudiants = [
    {
      'nom':'KEITA',
      'prenom': 'Mamady',
      'photo':'https://image.freepik.com/photos-gratuite/etudiant-diplome-camera-diplome_23-2148498978.jpg',
      'dateDeNaissance':'1996/05/15',
      'pays':'Cote d\'Ivoire'
    }
    ,
    {
      'nom':'EDINE SALAH',
      'prenom': 'YOUN BI',
      'photo':'https://www.acs-ami.com/fr/blog/wp-content/uploads/2015/06/etudiante-travail-alternance.jpg',
      'dateDeNaissance':'1996/05/15',
      'pays':'Maroc'
    }
    ,{
      'nom':'KOFFI',
      'prenom': 'Axel',
      'photo':'https://cdn2.iconfinder.com/data/icons/user-interface-solid-6/64/User_Interface_Glyph-01-512.png',
      'dateDeNaissance':'1996/05/15',
      'pays':'Cote d\'Ivoire'
    }
    ,{
      'nom':'Eunice',
      'prenom': 'YEDE',
      'photo':'https://www.espritentrepreneur.net/uploads/photo/photo_5427.cb87157ea92ee471a060a45104d6055f9ac21978.jpg',
      'dateDeNaissance':'1996/05/15',
      'pays':'HAITI'
    }
    ,{
      'nom':'Eunice',
      'prenom': 'YEDE',
      'photo':'https://www.boursedetude.org/wp-content/uploads/2018/05/Bourse-%C3%A9tudiant-africain.jpg',
      'dateDeNaissance':'1996/05/15',
      'pays':'HAITI'
    }
    ,{
      'nom':'Eunice',
      'prenom': 'YEDE',
      'photo':'https://etudiantafricain.files.wordpress.com/2019/04/istock-883657418-1080x675.jpg?w=1080',
      'dateDeNaissance':'1996/05/15',
      'pays':'HAITI'
    }
    ,{
      'nom':'Eunice',
      'prenom': 'YEDE',
      'photo':'https://cdn2.iconfinder.com/data/icons/user-interface-solid-6/64/User_Interface_Glyph-01-512.png',
      'dateDeNaissance':'1996/05/15',
      'pays':'HAITI'
    }
    ,{
      'nom':'Eunice',
      'prenom': 'YEDE',
      'photo':'https://i0.wp.com/www.boursedetude.org/wp-content/uploads/2019/09/Bourses-etudiants-africains.png?fit=1252%2C720&ssl=1',
      'dateDeNaissance':'1996/05/15',
      'pays':'HAITI'
    }
    ,{
      'nom':'Kacou',
      'prenom': 'Maurice',
      'photo':'https://i0.wp.com/www.boursedetude.org/wp-content/uploads/2019/09/Bourses-etudiants-africains.png?fit=1252%2C720&ssl=1',
      'dateDeNaissance':'1996/05/15',
      'pays':'HAITI'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
