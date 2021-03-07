import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AssignmentsComponent } from './assignments/assignments.component';
import { RenduDirective } from './shared/rendu.directive';
import { FormsModule } from '@angular/forms';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { Routes, RouterModule } from '@angular/router';
import { EditAssigmentComponent } from './assignments/edit-assigment/edit-assigment.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './assignments/login/login.component';
import { RegisterComponent } from './assignments/register/register.component';
import { AuthService } from './shared/auth.service';
import { AssignmentsService } from './shared/assignments.service';
import { AuthGuard } from './shared/auth.guard';
import {TokenInterceptorService } from './shared/token-interceptor.service';
import { MatieresComponent } from './matieres/matieres.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import {MatSelectModule} from '@angular/material/select';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { NgSelectModule} from '@ng-select/ng-select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {DragDropModule} from '@angular/cdk/drag-drop';


const routes: Routes = [
  { path: '', component: AssignmentsComponent },
  { path: 'home', component: AssignmentsComponent ,canActivate:[AuthGuard]},
  { path: 'assignments', component: AssignmentsComponent ,canActivate:[AuthGuard]},
  { path: 'add', component: AddAssignmentComponent,canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'enseignants', component: EnseignantsComponent ,canActivate:[AuthGuard]},
  { path: 'etudiants', component: EtudiantsComponent ,canActivate:[AuthGuard]},
  { path: 'matieres', component: MatieresComponent ,canActivate:[AuthGuard]},
  { path: 'assignment/:id', component: AssignmentDetailComponent },
  {
    path: 'assignment/:id/edit',component: EditAssigmentComponent,
  },

];
@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    RenduDirective,
    AssignmentDetailComponent,
    AddAssignmentComponent,
    EditAssigmentComponent,
    LoginComponent,
    RegisterComponent,
    MatieresComponent,
    EnseignantsComponent,
    EtudiantsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ScrollingModule,
    FormsModule, ReactiveFormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    NgxPaginationModule,
    NgSelectModule,
    MatProgressSpinnerModule,
    DragDropModule
    
  
  
  ],
  exports: [RouterModule],
  providers: [
    AuthService,AuthGuard,AssignmentsService,
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}



