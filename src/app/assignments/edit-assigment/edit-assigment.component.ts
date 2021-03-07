import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-edit-assigment',
  templateUrl: './edit-assigment.component.html',
  styleUrls: ['./edit-assigment.component.css'],
})
export class EditAssigmentComponent implements OnInit {
  assignment: Assignment;
  // formulaire
  nomassignment: string;
  dateDeRendu: Date;
  note:number;
  remarques:string;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private assignmentsService: AssignmentsService
  ) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.getAssignment();
  }

  getAssignment() {
    // 1 récupérer l'id de l'assignment dans l'URL
    let id: number = +this.route.snapshot.params.id;
    console.log('COMPOSANT EDIT ID = ' + id);

    this.assignmentsService.getAssignment(id).subscribe((assignment) => {
      //console.log(assignment);
      this.assignment = assignment;
      if (assignment) {
       /* this.nomassignment = assignment.nom;
        this.dateDeRendu = assignment.dateDeRendu;
        */
        this.note = assignment.note;
        this.remarques = assignment.remarques;
      }
    });
  }

  onSaveAssignment() {
    if (this.note) {
      this.assignment.note = this.note;
      this.assignment.rendu = true;
    }
    if (this.remarques) {
      this.assignment.remarques = this.remarques;
    }
    this.assignmentsService
      .updateAssignment(this.assignment)
      .subscribe((reponse) => {
        console.log(reponse.message);
        // on navigue vers la page d'accueil
        this.router.navigate(['/']);
      });
  }

  
}
