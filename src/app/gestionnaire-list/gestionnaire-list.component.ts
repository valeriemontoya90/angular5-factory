import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {GestionnaireService} from '../services/gestionnaire.service';
import * as Http from 'http';
import {from} from 'rxjs/observable/from';

declare var $: any;
@Component({
  selector: 'app-gestionnaire-list',
  templateUrl: './gestionnaire-list.component.html',
  styleUrls: ['./gestionnaire-list.component.scss']
})
export class GestionnaireListComponent implements OnInit {

    cols: any[];
    liste: any;

    constructor(private route: ActivatedRoute, private router: Router, private gestionnaireService: GestionnaireService) {}

    ngOnInit() {
        this.gestionnaireService.list().subscribe(data => {
            this.liste = data;
            console.log('liste = ' + this.liste);
        });

        this.cols = [
            {field: 'id', header: 'ID'},
            {field: 'nom', header: 'nom'},
            {field: 'prenom', header: 'prenom'},
            {field: 'adresse', header: 'adresse'},
            {field: '', header: 'Actions'}
        ];
    }

    onDeleteOne(id: number): void {
        this.gestionnaireService.delete(id).subscribe(data => {
            console.log('gestionnaire = ' + data);
            this.showNotification('top','right');
            this.router.navigateByUrl('/gestionnaires');
        },err => {
            console.log('err = ' , err.message);
            this.showNotification('top','right', 'danger', 'ECHEC - '+err.message);
        })
    }

    showNotification(from, align, type="success", message="SUCCES - La suppresion a fonctionné"){

        const color = Math.floor((Math.random() * 4) + 1);

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
