import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {TechnicienService} from '../services/technicien.service';
import {MaterielService} from '../services/materiel.service';
declare var $: any;
@Component({
    selector: 'app-technicien-add',
    templateUrl: './technicien-add.component.html',
    styleUrls: ['./technicien-add.component.scss']
})
export class TechnicienAddComponent implements OnInit {
    technicienAddForm: FormGroup;
    listMateriels= {};

    constructor
    (private fb: FormBuilder, private router: Router,
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
        this.technicienAddForm = this.fb.group({
            'id': [''],
            'nom': [''],
            'prenom': [''],
            'adresse': [''],
            'codePostal': [''],
            'mail': [''],
            'materiel': ['']
        });
        this.getListMateriels();
    }

    getListMateriels(): void {
        this.materielService.list().subscribe(data =>{
            this.listMateriels = data;
            console.log('listMateriels =' + this.listMateriels);
        });
    }
    onSubmit(): void {
        this.technicienService.add(this.technicienAddForm.getRawValue()).subscribe(data => {
            const technicien = data;
            console.log('this.technicien = ' + technicien.nom);
            this.showNotification('top', 'right');
            this.router.navigateByUrl('/techniciens');
        }, err => {
            console.log('err = ', err.message);
            this.showNotification('top', 'right', 'danger', 'ECHEC - La connexion avec le serveur a échoué');
        });
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
