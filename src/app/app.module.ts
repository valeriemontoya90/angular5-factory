import { CodeHighlighterModule, TabViewModule, GrowlModule, ButtonModule, ConfirmDialogModule, DropdownModule } from 'primeng/primeng';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { MaterielComponent } from './materiel/materiel.component';
import { RhComponent } from './rh/rh.component';

import { MatosComponent } from './matos/matos.component';
import { TableModule } from 'primeng/table';
import { MatosService } from "./matos.service";
import { HttpClientModule } from "@angular/common/http";
import { MatosSallesAddComponent } from './matos-salles-add/matos-salles-add.component';
import { MatosSallesEditComponent } from './matos-salles-edit/matos-salles-edit.component';
import { MatosSallesShowComponent } from './matos-salles-show/matos-salles-show.component';

import {NgModule} from "@angular/core";
import { GestionnaireListComponent } from './gestionnaire-list/gestionnaire-list.component';
import {GestionnaireService} from './services/gestionnaire.service';
import { GestionnaireAddComponent } from './gestionnaire-add/gestionnaire-add.component';
import { GestionnaireEditComponent } from './gestionnaire-edit/gestionnaire-edit.component';
import { GestionnaireShowComponent } from './gestionnaire-show/gestionnaire-show.component';
import { CursusListComponent } from './cursus-list/cursus-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CursusService} from './services/cursus.service';
import { CursusAddComponent } from './cursus-add/cursus-add.component';
import {ScheduleModule} from 'primeng/schedule';
import {EventService} from './services/event.service';
import { CursusEditComponent } from './cursus-edit/cursus-edit.component';
import { CursusShowComponent } from './cursus-show/cursus-show.component';
import {PickListModule} from 'primeng/primeng';
import {FormateurService} from './services/formateur.service';
import {MatiereService} from './services/matiere.service';
import { VideoprojListComponent } from './videoproj-list/videoproj-list.component';
import { VideoprojAddComponent } from './videoproj-add/videoproj-add.component';
import { VideoprojEditComponent } from './videoproj-edit/videoproj-edit.component';
import { VideoprojShowComponent } from './videoproj-show/videoproj-show.component';
import { OrdinateurListComponent } from './ordinateur-list/ordinateur-list.component';
import { OrdinateurAddComponent } from './ordinateur-add/ordinateur-add.component';
import { OrdinateurEditComponent } from './ordinateur-edit/ordinateur-edit.component';
import { OrdinateurShowComponent } from './ordinateur-show/ordinateur-show.component';
import { CommonModule } from '@angular/common';
import { OrdinateurService } from './services/ordinateur.service';
import { VideoprojService } from './services/videoproj.service';

@NgModule({
  declarations: [
      AppComponent,
      MaterielComponent,
      RhComponent,
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
      VideoprojListComponent,
      VideoprojAddComponent,
      VideoprojEditComponent,
      VideoprojShowComponent,
      OrdinateurListComponent,
      OrdinateurAddComponent,
      OrdinateurEditComponent,
      OrdinateurShowComponent
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
      PickListModule,
      DropdownModule,
      CommonModule,
      ConfirmDialogModule,
      ButtonModule,
      GrowlModule,
      TabViewModule,
      CodeHighlighterModule
  ],
  providers: [
      MatosService,
      GestionnaireService,
      CursusService,
      EventService,
      FormateurService,
      MatiereService,
      OrdinateurService, 
      VideoprojService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
