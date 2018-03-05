import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {FormateurService} from "../services/formateur.service";

declare var $: any;
@Component({
  selector: 'app-formateur-add',
  templateUrl: './formateur-add.component.html',
  styleUrls: ['./formateur-add.component.scss']
})
export class FormateurAddComponent implements OnInit {

    formateurAddForm: FormGroup;

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private formateurService: FormateurService) {
        this.formateurAddForm = new FormGroup({
            id: new FormControl(),
            nom: new FormControl(),
            prenom: new FormControl(),
            adresse: new FormControl(),
            codePostal: new FormControl(),
            mail: new FormControl()
        });
    }

    ngOnInit() {
        this.formateurAddForm = this.fb.group({
            'id': [''],
            'nom': [''],
            'prenom': [''],
            'adresse': [''],
            'codePostal': [''],
            'mail': ['']
        });
    }

    onSubmit(): void {
        console.log('this.formateurAddForm.getRawValue() = ' + this.formateurAddForm.getRawValue());
        this.formateurService.add(this.formateurAddForm.getRawValue()).subscribe(data => {
            console.log('formateur = ' + data);
            this.showNotification('top','right');
            this.router.navigateByUrl('/formateurs');
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
