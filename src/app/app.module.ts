import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

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

@NgModule({
  declarations: [
    AppComponent,
    MaterielComponent,
    RhComponent,
    MatosComponent,
    MatosSallesAddComponent,
    MatosSallesEditComponent,
    MatosSallesShowComponent

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
  providers: [MatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
