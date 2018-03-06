import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TechnicienService} from '../services/technicien.service';

declare var $: any;

@Component({
    selector: 'app-technicien-list',
    templateUrl: './technicien-list.component.html',
    styleUrls: ['./technicien-list.component.scss']
})
export class TechnicienListComponent implements OnInit {
    cols: any;
    listTechnicien: any;

    constructor
    (private route: ActivatedRoute, private router: Router, private technicienService: TechnicienService) {
    }

    ngOnInit() {
        this.technicienService.list().subscribe(data => {
            this.listTechnicien = data;
            console.log('listTechnicien = ' + this.listTechnicien);
        });
        this.cols = [
            {field: 'id', header: 'Id'},
            {field: 'nom', header: 'Nom'},
            {field: 'prenom', header: 'Prenom'},
            {field: 'adresse', header: 'Adresse'},
            {field: '', header: 'Actions'}
        ];
    }

    onDeleteOne(id: number): void {
        this.technicienService.delete(id).subscribe(data => {
            console.log('this.technicien = ' + data);
            this.showNotification('top', 'right');
            this.router.navigateByUrl('/techniciens');
        }, err => {
            console.log('err = ', err.message);
            this.showNotification
            ('top', 'right', 'danger', 'ECHEC - La connexion avec le serveur a échoué');
        })
    }

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
