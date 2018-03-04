import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { MaterielComponent } from './materiel/materiel.component';
import { RhComponent } from './rh/rh.component';
import { MatosComponent } from './matos/matos.component';
import {TableModule} from 'primeng/table';
import {MatosService} from "./matos.service";
import {HttpClientModule} from "@angular/common/http";
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
      CursusAddComponent
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
      BrowserAnimationsModule
  ],
  providers: [
      MatosService,
      GestionnaireService,
      CursusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
