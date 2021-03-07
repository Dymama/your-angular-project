import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';
import { NgSelectModule,NgOption} from '@ng-select/ng-select';


@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css'],
})
export class AddAssignmentComponent implements OnInit {
  // pour le formulaire
  nomDevoir = '';
  dateDeRendu: Date = null;
  matiereSelectionner=''
  matieres :  NgOption[] = [

     {
      id:1,
      titre:'Angular et Web Componenent',
      enseignant_nom:'Michel BUFFA',
      enseignant_photo:'https://i1.rgstatic.net/ii/profile.image/712495153029121-1546883490651_Q512/Michel-Buffa.jpg',
      image:'https://miro.medium.com/max/1100/1*dYhDHdCt0lhVRdj0IjrI7A.png'
      },
    {
    id:2,
    titre:'Data Science avec R',
    enseignant_nom:'Alison Témin',
    enseignant_photo:'https://pbs.twimg.com/profile_images/958400798261760000/rMetRaSU.jpg',
    image:'https://nareshit.com/wp-content/uploads/2018/09/Data-science-with-r-language-nareshit.jpg'
    }
    ,
    {
    id:3,
    titre:'BIG DATA SQL',
    enseignant_nom:'Serge Miranda',
    enseignant_photo:'https://i0.wp.com/www.midi-madagasikara.mg/wp-content/uploads/2017/09/Miranda_.gif?fit=490%2C569',
    image:'https://bigdatapath.files.wordpress.com/2018/04/big_data_sql.jpg'
    }
    ,
      {
      id:4,
      titre:'NFC',
      enseignant_nom:'Amoss Edouard',
      enseignant_photo:'https://0.academia-photos.com/2684716/858039/1070509/s200_amosse.edouard.jpg',
      image:'https://image.coolblue.be/840x473/content/4de022052a84cdf855ab48790c3d617c'
      }
      ,
       {
        id:5,
        titre:'Oracle DBA',
        enseignant_nom:'MOPOLO',
        enseignant_photo:'http://www.esatic.ci/images/personnel/[Esatic_Photo]_27face628b14254406938ec1437a6c50.jpg',
        image:'https://www.windows8facile.fr/wp-content/uploads/2017/10/oracle-logo.jpg'
        }
        ,
        {
          id:6,
          titre:'Hadoop Map Reduce',
          enseignant_nom:'Sergieo Simonian',
          enseignant_photo:'https://www.superprof.lu/images/annonces/professeur-home-architecte-big-data-experimente-donne-cours-administration-cluster-hadoop-paris.jpg',
          image:'https://miro.medium.com/max/1000/1*U95c0vlgdmnUOxt7in3BRQ.png'
          
        }
        
  ];

  selectMatiere =[];
  selectMatiereId:number;
  titre=''
  image=''
  enseignant_photo='';
  enseignant_nom= '';
  auteur= '';
  selected = 1;
  note=0;
  remarques='aucune remarque pour l\'instant';

  constructor(
    private assignmentsService: AssignmentsService,
    private router: Router
  ) {}

  ngOnInit(): void {}


  onSubmit(event) {
    // evite la soumission standard du formulaire, qui génère un warning
    // dans la console...
    event.preventDefault();
    console.log(
      'Dans submit nom = ' + this.nomDevoir + ' date = ' + this.dateDeRendu
    );
    
    let newAssignment = new Assignment();
    newAssignment.id = Math.floor(Math.random() * 1000000);
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = new Date();
    newAssignment.rendu = false;
    this.matieres.forEach(a => {
     if(a.id == this.selected)
      {
        newAssignment.matieres=a.titre;
        newAssignment.enseignant_nom= a.enseignant_nom;
        newAssignment.enseignant_photo=a.enseignant_photo;
        newAssignment.image=a.image;

      }
    });
    
    newAssignment.auteur = this.auteur;
    newAssignment.note = this.note;
    newAssignment.remarques = this.remarques;
    // on va utiliser directement le service
    this.assignmentsService
      .addAssignment(newAssignment)
      .subscribe((reponse) => {
        console.log(reponse.message);

        // il va falloir naviguer de nouveau vers la page d'accueil
        // on va devoir faire l'équivalent du routerLink="/home" mais
        // par programme...
        // on retourne à la page d'accueil
        this.router.navigate(['/']);
      });
  }
}
