import { VideoprojEditComponent } from './../videoproj-edit/videoproj-edit.component';
import { VideoprojAddComponent } from './../videoproj-add/videoproj-add.component';
import { VideoprojListComponent } from './../videoproj-list/videoproj-list.component';
import { VideoprojShowComponent } from '../videoproj-show/videoproj-show.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { MatosComponent } from "../matos/matos.component";
import { MatosSallesAddComponent } from "../matos-salles-add/matos-salles-add.component";
import { MatosSallesEditComponent } from "../matos-salles-edit/matos-salles-edit.component";
import { MatosSallesShowComponent } from "../matos-salles-show/matos-salles-show.component";
import { GestionnaireListComponent } from '../gestionnaire-list/gestionnaire-list.component';
import { GestionnaireAddComponent } from '../gestionnaire-add/gestionnaire-add.component';
import { GestionnaireEditComponent } from '../gestionnaire-edit/gestionnaire-edit.component';
import { GestionnaireShowComponent } from '../gestionnaire-show/gestionnaire-show.component';
import { CursusListComponent } from '../cursus-list/cursus-list.component';
import { CursusAddComponent } from '../cursus-add/cursus-add.component';
import { CursusEditComponent } from '../cursus-edit/cursus-edit.component';
import { CursusShowComponent } from '../cursus-show/cursus-show.component';
import { OrdinateurListComponent } from '../ordinateur-list/ordinateur-list.component';
import { OrdinateurAddComponent } from '../ordinateur-add/ordinateur-add.component';
import { OrdinateurShowComponent } from '../ordinateur-show/ordinateur-show.component';
import { OrdinateurEditComponent } from '../ordinateur-edit/ordinateur-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'cursus', pathMatch: 'full' },
  { path: 'salles', component: MatosComponent },
  { path: 'salles/add', component: MatosSallesAddComponent },
  { path: 'salles/show/:id', component: MatosSallesShowComponent },
  { path: 'salles/edit/:id', component: MatosSallesEditComponent, pathMatch: 'full' },
  { path: 'ordinateurs', component: OrdinateurListComponent },
  { path: 'ordinateurs/add', component: OrdinateurAddComponent },
  { path: 'ordinateurs/show/:id', component: OrdinateurShowComponent },
  { path: 'ordinateurs/edit/:id', component: OrdinateurEditComponent, pathMatch: 'full' },
  { path: 'videoprojs', component: VideoprojListComponent },
  { path: 'videoprojs/add', component: VideoprojAddComponent },
  { path: 'videoprojs/show/:id', component: VideoprojShowComponent },
  { path: 'videoprojs/edit/:id', component: VideoprojEditComponent, pathMatch: 'full' },
  { path: 'gestionnaires', component: GestionnaireListComponent },
  { path: 'gestionnaires/add', component: GestionnaireAddComponent },
  { path: 'gestionnaires/show/:id', component: GestionnaireShowComponent },
  { path: 'gestionnaires/edit/:id', component: GestionnaireEditComponent, pathMatch: 'full' },
  { path: 'cursus', component: CursusListComponent },
  { path: 'cursus/add', component: CursusAddComponent },
  { path: 'cursus/edit/:id', component: CursusEditComponent, pathMatch: 'full' },
  { path: 'cursus/show/:id', component: CursusShowComponent }

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
