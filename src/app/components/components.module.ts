import { VideoprojEditComponent } from './../videoproj-edit/videoproj-edit.component';
import { VideoprojAddComponent } from './../videoproj-add/videoproj-add.component';
import { VideoprojListComponent } from './../videoproj-list/videoproj-list.component';
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
import { OrdinateurShowComponent } from '../ordinateur-show/ordinateur-show.component';
import { OrdinateurAddComponent } from '../ordinateur-add/ordinateur-add.component';
import { OrdinateurEditComponent } from '../ordinateur-edit/ordinateur-edit.component';
import { OrdinateurListComponent } from '../ordinateur-list/ordinateur-list.component';
import { VideoprojShowComponent } from '../videoproj-show/videoproj-show.component';

const routes: Routes = [
  { path: '', redirectTo: 'videoprojs', pathMatch: 'full' },
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
  { path: 'videoprojs/edit/:id', component: VideoprojEditComponent, pathMatch: 'full' }
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
