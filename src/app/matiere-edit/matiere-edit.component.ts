import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatiereModule} from "../entities/matiere.module";
import {MatiereService} from "../services/matiere.service";

declare var $: any;
@Component({
  selector: 'app-matiere-edit',
  templateUrl: './matiere-edit.component.html',
  styleUrls: ['./matiere-edit.component.scss']
})
export class MatiereEditComponent implements OnInit {

    matiere = new MatiereModule(-1, "", -1, "", "", "", null);

    matiereEditForm: FormGroup;

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private matiereService: MatiereService) {
        this.matiereEditForm = new FormGroup({
            id: new FormControl(),
            titre: new FormControl(),
            duree: new FormControl(),
            objectif: new FormControl(),
            prerequis: new FormControl(),
            contenu: new FormControl()
        });
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params['id'];
            console.log('ID == ' +  id);
            this.matiereService.getOne(id).subscribe(data => {
                this.matiere = data;
                console.log('matiere detail = ' + this.matiere);
                this.matiereEditForm = this.fb.group({
                    'id': [this.matiere.id],
                    'titre': [this.matiere.titre],
                    'duree': [this.matiere.duree],
                    'objectif': [this.matiere.objectif],
                    'prerequis': [this.matiere.prerequis],
                    'contenu': [this.matiere.contenu]
                });
            });
        });
    }

    onSubmit(): void {
        console.log('this.matiereEditForm.getRawValue() = ' + this.matiereEditForm.getRawValue());
        this.matiereService.update(this.matiereEditForm.getRawValue()).subscribe(data => {
            console.log('matiere = ' + data);
            this.showNotification('top','right');
            this.router.navigateByUrl('/matieres');
        },err => {
            console.log('err = ' , err.message);
            this.showNotification('top','right', 'danger', 'ECHEC - La connexion avec le serveur a échoué');
        })
    }

    showNotification(from, align, type="success", message="SUCCES - Les modifications ont bien été sauvegardées"){
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
