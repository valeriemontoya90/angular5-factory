import { CodeHighlighterModule, TabViewModule, GrowlModule, ButtonModule, ConfirmDialogModule, DropdownModule } from 'primeng/primeng';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatosComponent } from './matos/matos.component';
import { TableModule } from 'primeng/table';
import { MatosService } from "./matos.service";
import { HttpClientModule } from "@angular/common/http";
import { MatosSallesAddComponent } from './matos-salles-add/matos-salles-add.component';
import { MatosSallesEditComponent } from './matos-salles-edit/matos-salles-edit.component';
import { MatosSallesShowComponent } from './matos-salles-show/matos-salles-show.component';
import { NgModule } from "@angular/core";
import { VideoprojListComponent } from './videoproj-list/videoproj-list.component';
import { VideoprojAddComponent } from './videoproj-add/videoproj-add.component';
import { VideoprojEditComponent } from './videoproj-edit/videoproj-edit.component';
import { VideoprojShowComponent } from './videoproj-show/videoproj-show.component';
import { OrdinateurListComponent } from './ordinateur-list/ordinateur-list.component';
import { OrdinateurAddComponent } from './ordinateur-add/ordinateur-add.component';
import { OrdinateurEditComponent } from './ordinateur-edit/ordinateur-edit.component';
import { OrdinateurShowComponent } from './ordinateur-show/ordinateur-show.component';
import { OrdinateurService } from './services/ordinateur.service';
import { VideoprojService } from './services/videoproj.service';
import { CommonModule } from '@angular/common';

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
    DropdownModule,
    CommonModule,
    ConfirmDialogModule,
    ButtonModule,
    GrowlModule,
    TabViewModule,
    CodeHighlighterModule


  ],
  providers: [MatosService, OrdinateurService, VideoprojService],
  bootstrap: [AppComponent]
})
export class AppModule { }
