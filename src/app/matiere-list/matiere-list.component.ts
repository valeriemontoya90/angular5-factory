import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatiereService} from "../services/matiere.service";

declare var $: any;
@Component({
  selector: 'app-matiere-list',
  templateUrl: './matiere-list.component.html',
  styleUrls: ['./matiere-list.component.scss']
})
export class MatiereListComponent implements OnInit {

    cols: any[];
    liste: any;

    constructor(private route: ActivatedRoute, private router: Router, private matiereService: MatiereService) {}

    ngOnInit() {
        this.matiereService.list().subscribe(data => {
            this.liste = data;
            console.log('liste = ' + this.liste);
        });

        this.cols = [
            {field: 'id', header: 'ID'},
            {field: 'titre', header: 'titre'},
            {field: 'duree', header: 'duree'},
            {field: 'prerequis', header: 'prerequis'},
            {field: '', header: 'Actions'}
        ];
    }

    onDeleteOne(id: number): void {
        this.matiereService.delete(id).subscribe(data => {
            console.log('gestionnaire = ' + data);
            this.showNotification('top','right');
            this.router.navigateByUrl('/gestionnaires');
        },err => {
            console.log('err = ' , err.message);
            this.showNotification('top','right', 'danger', 'ECHEC - La connexion avec le serveur a échoué');
        })
    }

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
