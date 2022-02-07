import { Injectable } from '@angular/core';
import { Course } from '../course/course';
// au lieu de renvoyer un tableau de cours, on va renvoyer un Observable sur le tableau => il faudra importer les déclarations des observables
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }
  // ici, on va créer une méthode qui renvoie les données dont le composant Courses à besoin. Création mock
  getCourses() : Observable<Course[]>{
    return of([
      {titre: 'c1', nb_etud: 2},
      {titre: 'c2', nb_etud: 4},
      {titre: 'c3', nb_etud: 5}
    ]);
  }
}
