import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatosService} from '../matos.service';
import {GestionnaireService} from '../services/gestionnaire.service';

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
            {field: 'code', header: 'code'},
            {field: 'cout', header: 'cout'},
            {field: 'isDisponible', header: 'isDisponible'},
            {field: '', header: 'Actions'}
        ];
    }

    onDeleteOne(id: number): void {
        this.gestionnaireService.delete(id).subscribe(data => {
            console.log('gestionnaire = ' + data);
            this.router.navigateByUrl('/gestionnaires');
        });
    }
}
