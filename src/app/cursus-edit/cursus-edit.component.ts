import { Component, OnInit } from '@angular/core';
import {CursusModule} from '../entities/cursus.module';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CursusService} from '../services/cursus.service';

declare var $: any;
@Component({
  selector: 'app-cursus-edit',
  templateUrl: './cursus-edit.component.html',
  styleUrls: ['./cursus-edit.component.scss']
})
export class CursusEditComponent implements OnInit {

    cursus = new CursusModule(-1, "", null, null,  null, null);

    cursusAddForm: FormGroup;

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private cursusService: CursusService) {
        this.cursusAddForm = new FormGroup({
            id: new FormControl(),
            titre: new FormControl(),
            dateDebut: new FormControl(),
            dateFin: new FormControl(),
            stagiaires: new FormControl(),
            formations: new FormControl()
        });
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params['id'];
            console.log('ID == ' +  id);
            this.cursusService.getOne(id).subscribe(data => {
                this.cursus = data;
                console.log('salle detail = ' + this.cursus);
                this.cursusAddForm = this.fb.group({
                    'id': [this.cursus.id],
                    'titre': [this.cursus.titre],
                    'dateDebut': [this.cursus.dateDebut],
                    'dateFin': [this.cursus.dateFin],
                    'stagiaires': [this.cursus.stagiaires],
                    'formations': [this.cursus.formations]
                });
            });
        });
    }

    onSubmit(): void {
        console.log('this.salleAddForm.getRawValue() = ' + this.cursusAddForm.getRawValue());
        this.cursusService.update(this.cursusAddForm.getRawValue()).subscribe(data => {
            console.log('gestionnaire = ' + data);
            this.showNotification('top','right');
            this.router.navigateByUrl('/gestionnaires');
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
