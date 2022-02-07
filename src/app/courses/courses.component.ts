import { Component, OnInit } from '@angular/core';
import { Course } from '../course/course'; // import interface
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  titre : string = "liste des cours";
  ma_valeur : string = "valeur initiale";
  // UE : liste de cours. l'interface impose les champs
  UE !: Course[] ;
  nb_etuds !: number;
  // 2ème idée utiliser le service dans le constructor en mode INjection de dépendances. On passe le service en paramètre du constructeur, Angular ne créera qu'une seul instance de CourseService pour toute l'application et passera cette instance au constructeur
  constructor(private service : CoursesService) {
    // 1ère idée dans le constructeur, créer une istance du service et on appelle sa méthode getCourses pour pouvoir remplir notre tableau UE
    //let service = new CoursesService();
    //this.UE = service.getCourses();
   }

  ngOnInit(): void {
    // ngOnInit qui exploite le service
    //this.UE = this.service.getCourses();
    //this.getNbEtuds();
    // Suite à l'utilisation d'un observable nous devons modifier l'acces et mettre en place la récupération du nombre d'étudiants dans le callbacks
    this.service.getCourses().subscribe(data => {
      this.UE = data;
      this.getNbEtuds();
    })
  }

  getTitre() : string {
    return this.titre;
  }

  modifTitre() : void {
    this.titre = 'nouveau titre';
  }
  getNbEtuds() : void{
    this.nb_etuds = 0;
    for(let ue of this.UE){
      this.nb_etuds += ue.nb_etud;
    }
  }
  onNewNb(delta : number) : void {
    this.nb_etuds += delta;
  }

}
