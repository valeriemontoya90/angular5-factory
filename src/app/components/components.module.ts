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

const routes: Routes = [
    {path: '', redirectTo: 'salles', pathMatch: 'full'},
    {path: 'salles', component: MatosComponent},
    {path: 'salles/add', component: MatosSallesAddComponent},
    {path: 'salles/show/:id', component: MatosSallesShowComponent},
    {path: 'salles/edit/:id', component: MatosSallesEditComponent, pathMatch: 'full'}
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
