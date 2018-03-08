import {Component, OnInit} from '@angular/core';
import {StagiaireService} from '../services/stagiaire.service';
import {ActivatedRoute, Router} from '@angular/router';

declare var $: any;

@Component({
    selector: 'app-stagiaire-list',
    templateUrl: './stagiaire-list.component.html',
    styleUrls: ['./stagiaire-list.component.scss']
})
export class StagiaireListComponent implements OnInit {
    cols: any;
    listStagiaire: any;

    constructor(private route: ActivatedRoute, private router: Router, private stagiaireService: StagiaireService) {
    }

    ngOnInit() {
        this.stagiaireService.list().subscribe(data => {
            this.listStagiaire = data;
            console.log('listStagiaire = ' + this.listStagiaire);
        });
        this.cols = [
            {field: 'id', header: 'Id'},
            {field: 'nom', header: 'Nom'},
            {field: 'prenom', header: 'Prenom'},
            {field: 'ordinateur', header: 'Ordinateur'},
            {field: '', header: 'Actions'}
        ];
    }

    onDeleteOne(id: number): void {
        this.stagiaireService.delete(id).subscribe(data => {
            console.log('this.stagiaire = ' + data);
            this.showNotification('top', 'right');
            this.router.navigateByUrl('/stagiaires');
            this.refreshList();
        }, err => {
            console.log('err = ', err.message);
            this.showNotification
            ('top', 'right', 'danger', 'ECHEC - La connexion avec le serveur a échoué');
        })
    }

    refreshList() {
        this.stagiaireService.list().subscribe(data => {
            this.listStagiaire = data;
        });
    };


    private showNotification(from, align, type = 'success',
                             message = 'SUCCES - La suppresion a bien fonctionné') {
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
