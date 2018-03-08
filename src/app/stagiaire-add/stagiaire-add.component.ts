import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {StagiaireService} from '../services/stagiaire.service';
import {OrdinateurService} from "../services/ordinateur.service";
import {StagiaireModule} from "../entities/stagiaire.module";

declare var $: any;

@Component({
    selector: 'app-stagiaire-add',
    templateUrl: './stagiaire-add.component.html',
    styleUrls: ['./stagiaire-add.component.scss']
})
export class StagiaireAddComponent implements OnInit {

    stagiaireAddForm: FormGroup;
    ordinateurs: any;

    constructor
    (private fb: FormBuilder, private router: Router, private stagiaireService: StagiaireService, private ordinateurService: OrdinateurService) {
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
        this.ordinateurService.list().subscribe(data => {
            this.ordinateurs = data.filter(o => o.isDisponible);
            console.log('Liste des ordinateurs récupérés par le sce = ' + this.ordinateurs);
        });
    }

    onSubmit(): void {
        let stagiaire = new StagiaireModule(-1, this.stagiaireAddForm.getRawValue().nom,
            this.stagiaireAddForm.getRawValue().prenom, this.stagiaireAddForm.getRawValue().adresse,
            this.stagiaireAddForm.getRawValue().codePostal, this.stagiaireAddForm.getRawValue().mail,
            this.stagiaireAddForm.getRawValue().ordinateur);
        console.log('INPUT stagiaire = ', stagiaire.toJSON());
        this.stagiaireService.add(stagiaire.toJSON()).subscribe(data => {
            const stagiaire = data;
            console.log('this.stagiaire = ', stagiaire);
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