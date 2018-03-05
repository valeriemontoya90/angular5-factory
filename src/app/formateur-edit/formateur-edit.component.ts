import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {FormateurModule} from "../entities/formateur.module";
import {FormateurService} from "../services/formateur.service";
import {MatiereService} from "../services/matiere.service";

declare var $: any;
@Component({
  selector: 'app-formateur-edit',
  templateUrl: './formateur-edit.component.html',
  styleUrls: ['./formateur-edit.component.scss']
})
export class FormateurEditComponent implements OnInit {

    formateur = new FormateurModule(-1, "", "", "", "", "", null, null, null);

    formateurEditForm: FormGroup;

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router,
                private formateurService: FormateurService) {
        this.formateurEditForm = new FormGroup({
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
        this.route.params.subscribe(params => {
            const id = params['id'];
            console.log('ID == ' +  id);
            this.formateurService.getOne(id).subscribe(data => {
                this.formateur = data;
                console.log('salle detail = ' + this.formateur);
                this.formateurEditForm = this.fb.group({
                    'id': [this.formateur.id],
                    'nom': [this.formateur.nom],
                    'prenom': [this.formateur.prenom],
                    'adresse': [this.formateur.adresse],
                    'codePostal': [this.formateur.codePostal],
                    'mail': [this.formateur.mail],
                    'matieres': [],
                });
            });
        });
    }

    onSubmit(): void {
        console.log('this.salleAddForm.getRawValue() = ' + this.formateurEditForm.getRawValue());
        this.formateurService.update(this.formateurEditForm.getRawValue()).subscribe(data => {
            console.log('formateur = ' + data);
            this.showNotification('top','right');
            this.router.navigateByUrl('/formateurs');
        },err => {
            console.log('err = ' , err.message);
            this.showNotification('top','right', 'danger', 'ECHEC - La connexion avec le serveur a échoué');
        })
    }

    showNotification(from, align, type="success", message="SUCCES - Les modifications ont bien été sauvegardées"){
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
