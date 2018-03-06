import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MatosComponent} from '../matos/matos.component';
import {MatosSallesAddComponent} from '../matos-salles-add/matos-salles-add.component';
import {MatosSallesEditComponent} from '../matos-salles-edit/matos-salles-edit.component';
import {MatosSallesShowComponent} from '../matos-salles-show/matos-salles-show.component';
import {CursusShowComponent} from '../cursus-show/cursus-show.component';
import {CursusEditComponent} from '../cursus-edit/cursus-edit.component';
import {CursusAddComponent} from '../cursus-add/cursus-add.component';
import {CursusListComponent} from '../cursus-list/cursus-list.component';
import {GestionnaireEditComponent} from '../gestionnaire-edit/gestionnaire-edit.component';
import {GestionnaireShowComponent} from '../gestionnaire-show/gestionnaire-show.component';
import {GestionnaireAddComponent} from '../gestionnaire-add/gestionnaire-add.component';
import {GestionnaireListComponent} from '../gestionnaire-list/gestionnaire-list.component';
import {StagiaireAddComponent} from '../stagiaire-add/stagiaire-add.component';
import {TechnicienListComponent} from '../technicien-list/technicien-list.component';
import {TechnicienAddComponent} from '../technicien-add/technicien-add.component';
import {TechnicienShowComponent} from '../technicien-show/technicien-show.component';
import {TechnicienEditComponent} from '../technicien-edit/technicien-edit.component';
import {StagiaireListComponent} from '../stagiaire-list/stagiaire-list.component';
import {StagiaireShowComponent} from '../stagiaire-show/stagiaire-show.component';
import {StagiaireEditComponent} from '../stagiaire-edit/stagiaire-edit.component';
import {FormateurListComponent} from "../formateur-list/formateur-list.component";
import {FormateurAddComponent} from "../formateur-add/formateur-add.component";
import {FormateurShowComponent} from "../formateur-show/formateur-show.component";
import {FormateurEditComponent} from "../formateur-edit/formateur-edit.component";


const routes: Routes = [
    {path: '', redirectTo: 'cursus', pathMatch: 'full'},
    {path: 'salles', component: MatosComponent},
    {path: 'salles/add', component: MatosSallesAddComponent},
    {path: 'salles/show/:id', component: MatosSallesShowComponent},
    {path: 'salles/edit/:id', component: MatosSallesEditComponent, pathMatch: 'full'},
    {path: 'stagiaires', component: StagiaireListComponent},
    {path: 'stagiaires/add', component: StagiaireAddComponent},
    {path: 'stagiaires/show/:id', component: StagiaireShowComponent},
    {path: 'stagiaires/edit/:id', component: StagiaireEditComponent, pathMatch: 'full'},
    {path: 'gestionnaires', component: GestionnaireListComponent},
    {path: 'gestionnaires/add', component: GestionnaireAddComponent},
    {path: 'gestionnaires/show/:id', component: GestionnaireShowComponent},
    {path: 'gestionnaires/edit/:id', component: GestionnaireEditComponent, pathMatch: 'full'},
    {path: 'cursus', component: CursusListComponent},
    {path: 'cursus/add', component: CursusAddComponent},
    {path: 'cursus/edit/:id', component: CursusEditComponent, pathMatch: 'full'},
    {path: 'cursus/show/:id', component: CursusShowComponent},
    {path: 'techniciens', component: TechnicienListComponent},
    {path: 'techniciens/add', component: TechnicienAddComponent},
    {path: 'techniciens/show/:id', component: TechnicienShowComponent},
    {path: 'techniciens/edit/:id', component: TechnicienEditComponent, pathMatch: 'full'},
    {path: 'formateurs', component: FormateurListComponent},
    {path: 'formateurs/add', component: FormateurAddComponent},
    {path: 'formateurs/show/:id', component: FormateurShowComponent},
    {path: 'formateurs/edit/:id', component: FormateurEditComponent, pathMatch: 'full'}
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
export class ComponentsModule {
}
