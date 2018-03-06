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
    materiel = [];


    constructor
    (private route: ActivatedRoute, private technicienService: TechnicienService, private materielservice: MaterielService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params['id'];
            this.technicienService.getOne(id).subscribe(data => {
                this.technicien = data;
                console.log('technicien detail = ' + this.technicien);
                this.materielservice.ListAllByTechnicienId(id).subscribe(data1 => {
                    this.materiel = data1;
                    console.log('materiel = ' + this.materiel);
                });
            });
        });
    }

}
