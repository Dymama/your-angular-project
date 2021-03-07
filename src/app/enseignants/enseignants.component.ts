import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.css']
})
export class EnseignantsComponent implements OnInit {

  enseignants = [
    {
      'nom':'KEITA',
      'prenom': 'Mamady',
      'photo':'https://i.vimeocdn.com/video/602320807_1280x720.jpg',
      'dateDeNaissance':'1996/05/15'
    }
    ,
    {
      'nom':'Toussaint',
      'prenom': 'YOUN BI',
      'photo':'https://studentaffairs.lmu.edu/media/studentaffairs/oiss/lmu-oiss-profiles-NK.jpg',
      'dateDeNaissance':'1996/05/15'
    }
    ,{
      'nom':'KOFFI',
      'prenom': 'Axel',
      'photo':'https://cdn2.iconfinder.com/data/icons/user-interface-solid-6/64/User_Interface_Glyph-01-512.png',
      'dateDeNaissance':'1996/05/15'
    }
    ,{
      'nom':'Eunice',
      'prenom': 'YEDE',
      'photo':'https://cdn2.iconfinder.com/data/icons/user-interface-solid-6/64/User_Interface_Glyph-01-512.png',
      'dateDeNaissance':'1996/05/15'
    }
    ,
    {
      'nom':'Toussaint',
      'prenom': 'YOUN BI',
      'photo':'https://studentaffairs.lmu.edu/media/studentaffairs/oiss/lmu-oiss-profiles-NK.jpg',
      'dateDeNaissance':'1996/05/15'
    }
    ,
    {
      'nom':'Toussaint',
      'prenom': 'YOUN BI',
      'photo':'https://studentaffairs.lmu.edu/media/studentaffairs/oiss/lmu-oiss-profiles-NK.jpg',
      'dateDeNaissance':'1996/05/15'
    }
    ,
    {
      'nom':'Toussaint',
      'prenom': 'YOUN BI',
      'photo':'https://studentaffairs.lmu.edu/media/studentaffairs/oiss/lmu-oiss-profiles-NK.jpg',
      'dateDeNaissance':'1996/05/15'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
