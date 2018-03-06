import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {FormateurService} from "../services/formateur.service";
import {MatiereService} from "../services/matiere.service";
import {CompetenceService} from "../services/competence.service";
import {CursusModule} from "../entities/cursus.module";
import {CompetenceModule} from "../entities/competence.module";

declare var $: any;
@Component({
  selector: 'app-formateur-add',
  templateUrl: './formateur-add.component.html',
  styleUrls: ['./formateur-add.component.scss']
})
export class FormateurAddComponent implements OnInit {

    formateurAddForm: FormGroup;
    listMatieres: {};

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router,
                private formateurService: FormateurService, private matiereService: MatiereService,
                private competenceService: CompetenceService) {
        this.formateurAddForm = new FormGroup({
            id: new FormControl(),
            nom: new FormControl(),
            prenom: new FormControl(),
            adresse: new FormControl(),
            codePostal: new FormControl(),
            mail: new FormControl(),
            matieres: new FormControl()
        });
    }

    ngOnInit() {
        this.formateurAddForm = this.fb.group({
            'id': [''],
            'nom': [''],
            'prenom': [''],
            'adresse': [''],
            'codePostal': [''],
            'mail': [''],
            'matieres': ['']
        });
        this.getListMatieres();
    }

    getListMatieres(): void {
        this.matiereService.list().subscribe(data => {
            this.listMatieres = data;
            console.log('listMatieres = ' + this.listMatieres);
        })
    }

    onSubmit(): void {
        let dataInput = this.formateurAddForm.getRawValue();
        console.log('this.formateurAddForm.getRawValue(), ' + dataInput.matieres);
        this.formateurService.add(this.formateurAddForm.getRawValue()).subscribe(dataFormateur => {
            console.log('formateur = ' + dataFormateur);
            this.showNotification('top','right');
            this.router.navigateByUrl('/formateurs');

            for (let matiereId of this.formateurAddForm.getRawValue().matieres) {
                let competence = new CompetenceModule(-1, "AVANCE", matiereId, dataFormateur.id);
                console.log("competence = ", competence);
                this.competenceService.add(competence.toJSON()).subscribe(data => {
                    console.log('competence = ' + data);
                },err => {
                    console.log('err = ' , err.message);
                });
            }

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
