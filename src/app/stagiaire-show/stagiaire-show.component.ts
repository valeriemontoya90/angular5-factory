import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StagiaireService} from '../services/stagiaire.service';
import {OrdinateurService} from '../services/ordinateur.service';

@Component({
    selector: 'app-stagiaire-show',
    templateUrl: './stagiaire-show.component.html',
    styleUrls: ['./stagiaire-show.component.scss']
})
export class StagiaireShowComponent implements OnInit {
    stagiaire = {};
    ordinateur = [];

    constructor(private route: ActivatedRoute, private stagiaireService: StagiaireService, private ordinateurService: OrdinateurService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params['id'];
            this.stagiaireService.getOne(id).subscribe(data => {
                this.stagiaire = data;
                console.log('stagiaire detail = ' + this.stagiaire);
                this.ordinateurService.ListAllByStagiaireId(id).subscribe(data1 => {
                    this.ordinateur = data1;
                    console.log('ordinateur = ' + this.ordinateur);
                });
            });
        });
    }

}
