import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
// pour utiliser le ngModel, il faut ajouter FormsModule
import {FormsModule} from '@angular/forms';
import { CourseComponent } from './course/course.component';
// pour utiliser HttpClient impoter le module
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // dans les imports ajouter FormsModule
    FormsModule,
    // ajouter HttpClientModule
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
