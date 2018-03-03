import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {GestionnaireService} from '../services/gestionnaire.service';
import {GestionnaireMdule} from '../entities/gestionnaire.mdule';

@Component({
  selector: 'app-gestionnaire-edit',
  templateUrl: './gestionnaire-edit.component.html',
  styleUrls: ['./gestionnaire-edit.component.scss']
})
export class GestionnaireEditComponent implements OnInit {

    gestionnaire = new GestionnaireMdule(-1, "", "", "", "", "", null);

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
        this.route.params.subscribe(params => {
            const id = params['id'];
            console.log('ID == ' +  id);
            this.gestionnaireService.getOne(id).subscribe(data => {
                this.gestionnaire = data;
                console.log('salle detail = ' + this.gestionnaire);
                this.gestionnaireAddForm = this.fb.group({
                    'id': [this.gestionnaire.id],
                    'nom': [this.gestionnaire.nom],
                    'prenom': [this.gestionnaire.prenom],
                    'adresse': [this.gestionnaire.adresse],
                    'codePostal': [this.gestionnaire.codePostal],
                    'mail': [this.gestionnaire.mail]
                });
            });
        });
    }

    onSubmit(): void {
        console.log('this.salleAddForm.getRawValue() = ' + this.gestionnaireAddForm.getRawValue());
        this.gestionnaireService.update(this.gestionnaireAddForm.getRawValue()).subscribe(data => {
            this.gestionnaire = data;
            this.router.navigateByUrl('/gestionnaires');
        });
    }
}
