import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {FormateurModule} from "../entities/formateur.module";
import {FormateurService} from "../services/formateur.service";
import {MatiereService} from "../services/matiere.service";

declare var $: any;
@Component({
  selector: 'app-formation-add',
  templateUrl: './formation-add.component.html',
  styleUrls: ['./formation-add.component.scss']
})
export class FormationAddComponent implements OnInit {

    formationAddForm: FormGroup;
    searchFormationForm: FormGroup;
    listFormateurs: {};
    listMatieres: {};
    matiereSelectedId: number;

    constructor(private fb: FormBuilder, private formateurService: FormateurService, private matiereService: MatiereService) {
        this.formationAddForm = new FormGroup({
            id: new FormControl(),
            matiere: new FormControl(),
            dateDebut: new FormControl(),
            dateFin: new FormControl()
        });
        this.searchFormationForm = new FormGroup({
            listFormateursFormControl: new FormControl()
        });
    }

  ngOnInit() {
      this.formationAddForm = this.fb.group({
          'id': [''],
          'matiere': [''],
          'dateDebut': [''],
          'dateFin': ['']
      });
      this.getListMatieres();
      this.searchFormationForm = this.fb.group({
          'listFormateursFormControl': ['']
      });
  }

    getListMatieres(): void {
        this.matiereService.list().subscribe(data => {
            this.listMatieres = data;
            console.log('listMatieres = ' + this.listMatieres);
        })
    }

    onSearchListFormateurs(): void {
        this.matiereSelectedId = this.formationAddForm.getRawValue().matiere;
        console.log("this.matiereSelectedId = ", this.matiereSelectedId);
        this.formateurService.listAllByMatiereId(this.matiereSelectedId).subscribe(data => {
            console.log('data = ' + data);
            this.listFormateurs = data.map(f=> new FormateurModule(f[0],f[1],f[2],f[3],f[4],f[5] ,null, null, null));
            console.log('listFormateursAvailable = ', this.listFormateurs);
        })
    }

}
