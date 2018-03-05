import { FormControl } from '@angular/forms';
import { OrdinateurService } from './../services/ordinateur.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

declare var $: any;
@Component({
    selector: 'app-ordinateur-add',
    templateUrl: './ordinateur-add.component.html',
    styleUrls: ['./ordinateur-add.component.scss']
})
export class OrdinateurAddComponent implements OnInit {
    ordinateurAddForm: FormGroup;
    keys: any;

    constructor(private fb: FormBuilder, private router: Router, private ordinateurService: OrdinateurService) {
        this.ordinateurAddForm = new FormGroup({
            id: new FormControl(),
            code: new FormControl(),
            cout: new FormControl(),
            isDisponible: new FormControl(),
            processeur: new FormControl(),
            ram: new FormControl(),
            disqueDur: new FormControl(),
            anneeAchat: new FormControl(),
            stagiaire: new FormControl()
        });
    }

    ngOnInit() {
        this.ordinateurAddForm = this.fb.group({
            'id': [''],
            'code': [''],
            'cout': [''],
            'isDisponible': [''],
            'processeur': [1],
            'ram': [''],
            'disqueDur': [''],
            'anneeAchat': [''],
            'stagiaire': ['']
        });
    }

    onSubmit(): void {
        this.ordinateurService.add(this.ordinateurAddForm.getRawValue()).subscribe(data => {
            const ordinateur = data;
            console.log('this.ordinateur = ' + ordinateur);
            this.router.navigateByUrl('/ordinateurs');
            this.showNotification('top', 'right');
        }, err => {
            console.log('err = ', err.message);
            this.showNotification('top', 'right', 'danger', 'ECHEC - La connexion avec le serveur a échoué');
        })
    }

    showNotification(from, align, type = "success", message = "SUCCES - L'ajout a bien été effectué") {
        $.notify({
            icon: "notifications",
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
