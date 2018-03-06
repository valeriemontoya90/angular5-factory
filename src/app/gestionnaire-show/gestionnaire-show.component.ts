import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GestionnaireService} from '../services/gestionnaire.service';

@Component({
  selector: 'app-gestionnaire-show',
  templateUrl: './gestionnaire-show.component.html',
  styleUrls: ['./gestionnaire-show.component.scss']
})
export class GestionnaireShowComponent implements OnInit {

    gestionnaire = {};

    constructor(private route: ActivatedRoute, private gestionnaireService: GestionnaireService) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params['id'];
            this.gestionnaireService.getOne(id).subscribe(data => {
                this.gestionnaire = data;
                console.log('gestionnaire detail = ' + this.gestionnaire );
            });
        });
    }
}
