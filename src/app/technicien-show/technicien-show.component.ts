import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TechnicienService} from '../services/technicien.service';
import {MaterielService} from '../services/materiel.service';

@Component({
    selector: 'app-technicien-show',
    templateUrl: './technicien-show.component.html',
    styleUrls: ['./technicien-show.component.scss']
})
export class TechnicienShowComponent implements OnInit {

    technicien = {};
    materiel = null;

    constructor
    (private route: ActivatedRoute, private technicienService: TechnicienService, private materielservice: MaterielService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params['id'];
            this.technicienService.getOne(id).subscribe(data => {
                this.technicien = data;
                console.log('technicien detail = ', this.technicien);
                this.materielservice.listAllByTechnicienId(id).subscribe(data => {
                    this.materiel = data;
                    console.log('materiel = ' , this.materiel);
                });
            });
        });
    }
}
