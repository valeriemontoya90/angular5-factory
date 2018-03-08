import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormateurService} from "../services/formateur.service";

declare var $: any;
@Component({
    selector: 'app-formateur-list',
    templateUrl: './formateur-list.component.html',
    styleUrls: ['./formateur-list.component.scss']
})
export class FormateurListComponent implements OnInit {

    cols: any[];
    liste: any;

    constructor(private route: ActivatedRoute, private router: Router, private formateurService: FormateurService) {}

    ngOnInit() {
        this.formateurService.list().subscribe(data => {
            this.liste = data;
            console.log('liste = ' + this.liste);
        });

        this.cols = [
            {field: 'id', header: 'ID'},
            {field: 'nom', header: 'Nom'},
            {field: 'prenom', header: 'Prenom'},
            {field: 'mail', header: 'Email'},
            {field: '', header: 'Actions'}
        ];
    }

    onDeleteOne(id: number): void {
        this.formateurService.delete(id).subscribe(data => {
            console.log('gestionnaire = ' + data);
            this.showNotification('top','right');
            this.router.navigateByUrl('/formateurs');
            this.refreshList();
        },err => {
            console.log('err = ' , err.message);
            this.showNotification('top','right', 'danger', 'ECHEC - La connexion avec le serveur a échoué');
        })
    }

    refreshList() {
        this.formateurService.list().subscribe(data => {
            this.liste = data;
        });
    };

    showNotification(from, align, type="success", message="SUCCES - La suppresion a bien fonctionné"){
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
