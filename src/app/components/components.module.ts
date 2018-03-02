import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatosComponent} from "../matos/matos.component";
import {MatosSallesAddComponent} from "../matos-salles-add/matos-salles-add.component";
import {MatosSallesEditComponent} from "../matos-salles-edit/matos-salles-edit.component";
import {MatosSallesShowComponent} from "../matos-salles-show/matos-salles-show.component";
import {StagiaireModule} from "../stagiaire/stagiaire.module";
import {StagiaireComponent} from "../stagiaire/stagiaire.component";
import {StagiaireAddComponent} from "../stagiaire-add/stagiaire-add.component";

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'salles', component: MatosComponent},
    {path: 'salles/add', component: MatosSallesAddComponent},
    {path: 'salles/show/:id', component: MatosSallesShowComponent},
    {path: 'salles/edit/:id', component: MatosSallesEditComponent},
    {path: 'stagiaires', component: StagiaireComponent},
    {path: 'stagiaires/add', component: StagiaireAddComponent},
    {path: 'stagiaires/show/:id', component: MatosSallesShowComponent},
    {path: 'stagiaires/edit/:id', component: MatosSallesEditComponent}
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
