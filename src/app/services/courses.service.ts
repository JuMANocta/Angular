import { Injectable } from '@angular/core';
import { Course } from '../course/course';
// au lieu de renvoyer un tableau de cours, on va renvoyer un Observable sur le tableau => il faudra importer les déclarations des observables
import { Observable, of } from 'rxjs';
// on rajoute HttpClient qui va s'occuper de discuter avec le serveur web
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  // depency injection pour utiliser HttpClient
  constructor(private http : HttpClient) { }
  // ici, on va créer une méthode qui renvoie les données dont le composant Courses à besoin. Création mock
  // getCourses() : Observable<Course[]>{
  //   return of([
  //     {titre: 'c1', nb_etud: 2},
  //     {titre: 'c2', nb_etud: 4},
  //     {titre: 'c3', nb_etud: 5}
  //   ]);
  // }
  // ici on retourne un observable avec recupération HttpClient
  getCourses() : Observable<Course[]> {
    return this.http.get<Course[]>(
      // discuter avec le serveur via la method GET
      'http://localhost/courses/getcourses.php'
    )
  }
}
