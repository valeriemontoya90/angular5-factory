import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatiereService} from "../services/matiere.service";

declare var $: any;
@Component({
  selector: 'app-matiere-add',
  templateUrl: './matiere-add.component.html',
  styleUrls: ['./matiere-add.component.scss']
})
export class MatiereAddComponent implements OnInit {

    matiereAddForm: FormGroup;

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private matiereService: MatiereService) {
        this.matiereAddForm = new FormGroup({
            id: new FormControl(),
            titre: new FormControl(),
            duree: new FormControl(),
            objectif: new FormControl(),
            prerequis: new FormControl(),
            contenu: new FormControl()
        });
    }

    ngOnInit() {
        this.matiereAddForm = this.fb.group({
            'id': [''],
            'titre': [''],
            'duree': [''],
            'objectif': [''],
            'prerequis': [''],
            'contenu': ['']
        });
    }

    onSubmit(): void {
        console.log('this.gestionnaireAddForm.getRawValue() = ' + this.matiereAddForm.getRawValue());
        this.matiereService.add(this.matiereAddForm.getRawValue()).subscribe(data => {
            console.log('matiere = ' + data);
            this.showNotification('top','right');
            this.router.navigateByUrl('/matieres');
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
