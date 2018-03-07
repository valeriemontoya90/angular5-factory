import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {TechnicienModule} from '../technicien-list/technicien.module';
import {ActivatedRoute, Router} from '@angular/router';
import {TechnicienService} from '../services/technicien.service';
import {MaterielService} from '../services/materiel.service';

declare var $: any;

@Component({
    selector: 'app-technicien-edit',
    templateUrl: './technicien-edit.component.html',
    styleUrls: ['./technicien-edit.component.scss']
})
export class TechnicienEditComponent implements OnInit {
    technicienAddForm: FormGroup;
    technicien = new TechnicienModule(-1, '', '', '', '', '', null);

    constructor
    (private fb: FormBuilder, private route: ActivatedRoute, private router: Router,
     private technicienService: TechnicienService, private materielService: MaterielService) {
        this.technicienAddForm = new FormGroup({
            id: new FormControl(),
            nom: new FormControl(),
            prenom: new FormControl(),
            adresse: new FormControl(),
            codePostal: new FormControl(),
            mail: new FormControl(),
            materiel: new FormControl()
        });
    }


    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params['id'];
            console.log('ID == ' + id);
            this.technicienService.getOne(id).subscribe(data => {
                this.technicien = data;
                console.log('technicien detail = ' + this.technicien);
                this.technicienAddForm = this.fb.group({
                    'id': [this.technicien.id],
                    'nom': [this.technicien.nom],
                    'prenom': [this.technicien.prenom],
                    'adresse': [this.technicien.adresse],
                    'codePostal': [this.technicien.codePostal],
                    'mail': [this.technicien.mail],
                    'materiel': []
                });
            });
        });
    }

    onSubmit(): void {
        console.log('this.technicienAddForm.getRawValue() = ' + this.technicienAddForm.getRawValue());
        this.technicienService.update(this.technicienAddForm.getRawValue()).subscribe(data => {
            console.log('formateur = ' + data);
            this.showNotification('top', 'right');
            this.router.navigateByUrl('/techniciens');
        }, err => {
            console.log('err = ', err.message);
            this.showNotification('top', 'right', 'danger', 'ECHEC - La connexion avec le serveur a échoué');
        })
    }

    showNotification(from, align, type = 'success', message = 'SUCCES - Les modifications ont bien été sauvegardées') {
        $.notify({
            icon: 'notifications',
            message: message
        }, {
            type: type,
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    }
}