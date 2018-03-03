import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatosService} from '../matos.service';
import {GestionnaireService} from '../services/gestionnaire.service';

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
        this.gestionnaireService.add(this.gestionnaireAddForm.getRawValue()).subscribe(data => {
            const gestionnaire = data;
            console.log('this.gestionnaire = ' + gestionnaire);
            this.router.navigateByUrl('/gestionnaires');
        });
    }

}
