import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';
import {AppComponent} from './app.component';
import {MaterielComponent} from './materiel/materiel.component';
import {RhComponent} from './rh/rh.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatosComponent} from './matos/matos.component';
import {TableModule} from 'primeng/table';
import {MatosService} from './matos.service';
import {HttpClientModule} from '@angular/common/http';
import {MatosSallesAddComponent} from './matos-salles-add/matos-salles-add.component';
import {MatosSallesEditComponent} from './matos-salles-edit/matos-salles-edit.component';
import {MatosSallesShowComponent} from './matos-salles-show/matos-salles-show.component';
import {NgModule} from '@angular/core';
import {StagiaireService} from './services/stagiaire.service';
import {StagiaireAddComponent} from './stagiaire-add/stagiaire-add.component';
import {StagiaireEditComponent} from './stagiaire-edit/stagiaire-edit.component';
import {StagiaireShowComponent} from './stagiaire-show/stagiaire-show.component';
import {StagiaireListComponent} from './stagiaire-list/stagiaire-list.component';
import {OrdinateurService} from './services/ordinateur.service';
import {TechnicienListComponent} from './technicien-list/technicien-list.component';
import {TechnicienAddComponent} from './technicien-add/technicien-add.component';
import {TechnicienEditComponent} from './technicien-edit/technicien-edit.component';
import {TechnicienShowComponent} from './technicien-show/technicien-show.component';
import {TechnicienService} from './services/technicien.service';
import {CursusService} from './services/cursus.service';
import {EventService} from './services/event.service';
import {FormateurService} from './services/formateur.service';
import {CursusShowComponent} from './cursus-show/cursus-show.component';
import {CursusEditComponent} from './cursus-edit/cursus-edit.component';
import {CursusAddComponent} from './cursus-add/cursus-add.component';
import {CursusListComponent} from './cursus-list/cursus-list.component';
import {GestionnaireShowComponent} from './gestionnaire-show/gestionnaire-show.component';
import {GestionnaireEditComponent} from './gestionnaire-edit/gestionnaire-edit.component';
import {GestionnaireAddComponent} from './gestionnaire-add/gestionnaire-add.component';
import {GestionnaireListComponent} from './gestionnaire-list/gestionnaire-list.component';
import {PickListModule, ScheduleModule} from 'primeng/primeng';
import {GestionnaireService} from './services/gestionnaire.service';
import {MaterielService} from './services/materiel.service';
import {FormateurEditComponent} from "./formateur-edit/formateur-edit.component";
import {FormateurShowComponent} from "./formateur-show/formateur-show.component";
import {FormateurAddComponent} from "./formateur-add/formateur-add.component";
import {FormateurListComponent} from "./formateur-list/formateur-list.component";
import {MatiereAddComponent} from "./matiere-add/matiere-add.component";
import {MatiereShowComponent} from "./matiere-show/matiere-show.component";
import {MatiereEditComponent} from "./matiere-edit/matiere-edit.component";
import {MatiereListComponent} from "./matiere-list/matiere-list.component";
import {MatiereService} from "./services/matiere.service";
import {CompetenceService} from "./services/competence.service";


@NgModule({
    declarations: [
        AppComponent,
        MaterielComponent,
        RhComponent,
        MatosComponent,
        MatosSallesAddComponent,
        MatosSallesEditComponent,
        MatosSallesShowComponent,
        StagiaireAddComponent,
        StagiaireEditComponent,
        StagiaireShowComponent,
        StagiaireListComponent,
        TechnicienListComponent,
        TechnicienAddComponent,
        TechnicienEditComponent,
        TechnicienShowComponent,
        MatosComponent,
        MatosSallesAddComponent,
        MatosSallesEditComponent,
        MatosSallesShowComponent,
        GestionnaireListComponent,
        GestionnaireAddComponent,
        GestionnaireEditComponent,
        GestionnaireShowComponent,
        CursusListComponent,
        CursusAddComponent,
        CursusEditComponent,
        CursusShowComponent,
        FormateurEditComponent,
        FormateurShowComponent,
        FormateurAddComponent,
        FormateurListComponent,
        MatiereListComponent,
        MatiereShowComponent,
        MatiereEditComponent,
        MatiereAddComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        TableModule,
        BrowserAnimationsModule,
        ScheduleModule,
        PickListModule
    ],
    providers: [MatosService,
        StagiaireService,
        OrdinateurService,
        TechnicienService,
        CursusService,
        EventService,
        FormateurService,
        GestionnaireService,
        MaterielService,
        MatiereService,
        CompetenceService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
