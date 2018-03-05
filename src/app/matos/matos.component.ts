import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatosService } from '../matos.service';

declare var $: any;
@Component({
    selector: 'app-matos',
    templateUrl: './matos.component.html',
    styleUrls: ['./matos.component.scss']
})
export class MatosComponent implements OnInit {

    cols: any[];
    listMatos: any;

    constructor(private route: ActivatedRoute, private router: Router, private matosService: MatosService) { }

    ngOnInit() {
        this.refreshList();

        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'code', header: 'code' },
            { field: 'cout', header: 'cout' },
            { field: 'isDisponible', header: 'isDisponible' },
            { field: '', header: 'Actions' }
        ];
    }

    refreshList() {
        this.matosService.list().subscribe(data => {
            this.listMatos = data;
        });

    };

    onDeleteOne(id: number): void {
        this.matosService.delete(id).subscribe(data => {
            console.log('this.salle = ' + data);
            this.router.navigateByUrl('/salles');
            this.showNotification('top', 'right');
            this.refreshList();
        }, err => {
            console.log('err = ', err.message);
            this.showNotification('top', 'right', 'danger', 'ECHEC - La connexion avec le serveur a échoué');
        })
    }


    showNotification(from, align, type = "success", message = "SUCCES - La suppresion a bien fonctionné") {
        $.notify({
            icon: "notifications",
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
