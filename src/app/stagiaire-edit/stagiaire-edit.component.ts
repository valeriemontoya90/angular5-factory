import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {StagiaireService} from '../services/stagiaire.service';
import {StagiaireModule} from '../entities/stagiaire.module';

declare var $: any;

@Component({
    selector: 'app-stagiaire-edit',
    templateUrl: './stagiaire-edit.component.html',
    styleUrls: ['./stagiaire-edit.component.scss']
})
export class StagiaireEditComponent implements OnInit {
    stagiaireAddForm: FormGroup;
    stagiaire = new StagiaireModule(-1, '', '', '', '', '', null);

    constructor
    (private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private stagiaireService: StagiaireService) {
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
        this.route.params.subscribe(params => {
            const id = params['id'];
            console.log('ID == ' + id);
            this.stagiaireService.getOne(id).subscribe(data => {
                this.stagiaire = data;
                console.log('stagiaire detail = ' + this.stagiaire);
                this.stagiaireAddForm = this.fb.group({
                    'id': [this.stagiaire.id],
                    'nom': [this.stagiaire.nom],
                    'prenom': [this.stagiaire.prenom],
                    'adresse': [this.stagiaire.adresse],
                    'codePostal': [this.stagiaire.codePostal],
                    'mail': [this.stagiaire.mail],
                    'ordinateur': []
                });
            });
        });
    }

    onSubmit(): void {
        console.log('this.stagiaireAddForm.getRawValue() = ' + this.stagiaireAddForm.getRawValue());
        this.stagiaireService.update(this.stagiaireAddForm.getRawValue()).subscribe(data => {
            console.log('stagiaire = ' + data);
            this.showNotification('top', 'right');
            this.router.navigateByUrl('/stagiaires');
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
