import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {FormateurModule} from "../entities/formateur.module";
import {FormateurService} from "../services/formateur.service";
import {MatiereService} from "../services/matiere.service";
import {FormationService} from '../services/formation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CursusService} from '../services/cursus.service';

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
    cursusId: number;

    constructor(private fb: FormBuilder,  private route: ActivatedRoute, private router: Router, private formateurService: FormateurService,
                private matiereService: MatiereService, private formationService: FormationService, private cursusService: CursusService) {
        this.formationAddForm = new FormGroup({
            id: new FormControl(),
            matiere: new FormControl(),
            dateDebut: new FormControl(),
            dateFin: new FormControl(),
            matieres: new FormControl()
        });
        this.searchFormationForm = new FormGroup({
            listFormateursFormControl: new FormControl()
        });
    }

  ngOnInit() {
      this.route.params.subscribe(params => {
          this.cursusId = params['id'];
          console.log('cursusId == ' +  this.cursusId);
      });
      this.formationAddForm = this.fb.group({
          'id': [''],
          'matiere': [''],
          'dateDebut': [''],
          'dateFin': [''],
          'matieres': ['']
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

    onSubmit(): void {
        console.log('this.formationAddForm.getRawValue() = ' + this.formationAddForm.getRawValue());
        this.formationService.add(this.formationAddForm.getRawValue()).subscribe(data => {
            console.log('formation = ' + data);
            
        },err => {
            console.log('err = ' , err.message);
            this.showNotification('top','right', 'danger', 'ECHEC - La connexion avec le serveur a échoué');
        })
    }

    showNotification(from, align, type="success", message="SUCCES - L'ajout a bien été effectué"){
        $.notify({
            icon: "notifications",
            message: message
        },{
            type: type,
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    }

}
