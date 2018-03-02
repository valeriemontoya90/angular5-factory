import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { MaterielComponent } from './materiel/materiel.component';
import { RhComponent } from './rh/rh.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatosComponent } from './matos/matos.component';
import {TableModule} from 'primeng/table';
import {MatosService} from "./matos.service";
import {HttpClientModule} from "@angular/common/http";
import { MatosSallesAddComponent } from './matos-salles-add/matos-salles-add.component';
import { MatosSallesEditComponent } from './matos-salles-edit/matos-salles-edit.component';
import { MatosSallesShowComponent } from './matos-salles-show/matos-salles-show.component';
import {NgModule} from "@angular/core";
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import {StagiaireService} from "./services/stagiaire.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    MaterielComponent,
    RhComponent,
    MatosComponent,
    MatosSallesAddComponent,
    MatosSallesEditComponent,
    MatosSallesShowComponent,
    StagiaireComponent

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
  providers: [MatosService, StagiaireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
