import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {IncidentFormComponent} from "../../../../tp3/src/app/incident-form/incident-form.component";
import {IncidentListComponent} from "../../../../tp3/src/app/incident-list/incident-list.component";
import {MatosComponent} from "../matos/matos.component";

const routes: Routes = [
    {path: '', redirectTo: 'salles', pathMatch: 'full'},
    {path: 'salles', component: MatosComponent}
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
