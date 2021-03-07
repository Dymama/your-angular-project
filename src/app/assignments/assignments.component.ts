import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { filter, map, pairwise, tap, throttleTime } from 'rxjs/operators';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {
  titre = 'Mon application sur les Assignments 2 !';
  assignments: Assignment[] = [];
  assignments1: Assignment[] = [];
  assignments2:Assignment[] =[];
  assignmentSelectionne: Assignment;
  assignmentTransmis: Assignment;
  assignment:any = [];

  nombrePage1:any;
  nombrePage2:any;
  pagenombre1:number=1;
  pagenombre2:number=1;
  // Pour la pagination
  page: Number;
  p1: number = 1;
  p2: number = 1;
  nextPage: Number = 1;
  limit1: Number = 3;
  limit2: Number = 3;
  countAssignments: Number;
  dateDeRendu: Date;
  note:number;
  remarques:string;

  //@ViewChild('scroller') scroller: CdkVirtualScrollViewport;

  constructor(
    private assignmentsService: AssignmentsService,
    private ngZone: NgZone,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  items= [
    {
    'nom':'cours MOPOLO',
    'dateDeRendu':'2021/02/21',
    'rendu':false,
    'image':'https://www.jisc.ac.uk/sites/default/files/styles/project_image/public/students-in-classroom.jpg?itok=5mTtMcLY'
  }
  ]
  loading:boolean=true;
  ngOnInit(): void {
    this.assignmentsService.getAssignments().subscribe((assignments) => {
      // exécuté que quand les données sont réellement disponible
      this.assignments = assignments;
      this.pagenombre1=assignments.length;
      this.loading=false

      for (var a of assignments) {
       if(a.rendu){
       this.assignments1.push(a)
       }
       else{
        this.assignments2.push(a)
      }
      }

       console.log('rendu:'+this.assignments1.length)
       console.log('non rendu'+this.assignments2.length)
      });

    

  //this.getAssignments();//pour afficher la pagination
  }

  // avec pagination...
  getAssignments() {
    if (!this.nextPage) return;
    this.assignmentsService
      .getAssignmentsPagine(this.nextPage, this.limit1)
      .subscribe((data: any) => {
        this.page = data.page;
        this.nextPage = data.nextPage;
        this.countAssignments = data.totalDocs;
        this.assignments = this.assignments.concat(data.docs);
      });
  }

  assignmentClique(a: Assignment) {
    console.log('Assignment cliqué : ' + a.nom);
    this.assignmentSelectionne = a;
  }

  onNouvelAssignment(newAssignment: Assignment) {
    //this.assignments.push(newAssignment);
    this.assignmentsService
      .addAssignment(newAssignment)
      .subscribe((message) => {
        // on ne rentre ici que quand l'ajout (insert) a bien été
        // effectué !
        console.log(message);
      });
  }
  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
        /*//this.router.navigate(['assignment/:'+this.assignmentTransmis.id+'/edit']); 
        this.router.navigate(['assignment/id/edit']); 
       
        console.log('id ='+this.assignmentTransmis.id)
        */
       
    }
     else 
    {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
      
        // on retourne à la page d'accueil
        //this.router.navigate(['/'])
    }
  }

  onAssignmentRendu() {
    this.assignmentTransmis.rendu = true;
    this.assignmentsService
      .updateAssignment(this.assignmentTransmis)
      .subscribe((message) => {
        console.log(message);
        // on retourne à la page d'accueil
        //this.router.navigate(['/']);
      });
  }
  
}
