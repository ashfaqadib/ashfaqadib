import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';

const routeLists: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "aboutme", component: AboutmeComponent
  },

  {
    path: "education", component: EducationComponent
  },
  {
    path: "skills", component: SkillsComponent
  },

  {
    path: "projects", component: ProjectsComponent
  }    
];

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    HomeComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeLists),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
