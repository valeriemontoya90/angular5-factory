import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {StagiaireService} from '../services/stagiaire.service';
import {OrdinateurService} from '../services/ordinateur.service';

declare var $: any;
@Component({
    selector: 'app-stagiaire-add',
    templateUrl: './stagiaire-add.component.html',
    styleUrls: ['./stagiaire-add.component.scss']
})
export class StagiaireAddComponent implements OnInit {
    stagiaireAddForm: FormGroup;
    Keys: any;

    constructor
    (private fb: FormBuilder, private router: Router,
     private stagiaireService: StagiaireService, private ordinateurService: OrdinateurService) {
        this.stagiaireAddForm = new FormGroup({
            id: new FormControl(),
            nom: new FormControl(),
            prenom: new FormControl(),
            adresse: new FormControl(),
            codePostal: new FormControl(),
            mail: new FormControl(),
            ordinateur: new FormControl()
        });
    }

    ngOnInit() {
        this.stagiaireAddForm = this.fb.group({
            'id': [''],
            'nom': [''],
            'prenom': [''],
            'adresse': [''],
            'codePostal': [''],
            'mail': [''],
            'ordinateur': ['']
        });
    }

    onSubmit(): void {
        this.stagiaireService.add(this.stagiaireAddForm.getRawValue()).subscribe(data => {
            const stagiaire = data;
            console.log('this.stagiaire = ' + stagiaire);
            this.showNotification('top', 'right');
            this.router.navigateByUrl('/stagiaires');
        }, err => {
            console.log('err = ', err.message);
            this.showNotification('top', 'right', 'danger', 'ECHEC - La connexion avec le serveur a échoué');
        })
    }

    showNotification(from, align, type = 'success', message = 'SUCCES - L\'ajout a bien été effectué') {
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