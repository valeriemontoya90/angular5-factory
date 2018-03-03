import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {GestionnaireService} from '../services/gestionnaire.service';

declare var $: any;
@Component({
  selector: 'app-gestionnaire-add',
  templateUrl: './gestionnaire-add.component.html',
  styleUrls: ['./gestionnaire-add.component.scss']
})
export class GestionnaireAddComponent implements OnInit {

   gestionnaireAddForm: FormGroup;

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private gestionnaireService: GestionnaireService) {
        this.gestionnaireAddForm = new FormGroup({
            id: new FormControl(),
            nom: new FormControl(),
            prenom: new FormControl(),
            adresse: new FormControl(),
            codePostal: new FormControl(),
            mail: new FormControl()
        });
    }

    ngOnInit() {
        this.gestionnaireAddForm = this.fb.group({
            'id': [''],
            'nom': [''],
            'prenom': [''],
            'adresse': [''],
            'codePostal': [''],
            'mail': ['']
        });
    }

    onSubmit(): void {
        console.log('this.salleAddForm.getRawValue() = ' + this.gestionnaireAddForm.getRawValue());
        this.gestionnaireService.add(this.gestionnaireAddForm.getRawValue()).subscribe(data => {
            console.log('gestionnaire = ' + data);
            this.showNotification('top','right');
            this.router.navigateByUrl('/gestionnaires');
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
