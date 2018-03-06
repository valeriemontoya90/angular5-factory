import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatiereService} from "../services/matiere.service";

@Component({
  selector: 'app-matiere-show',
  templateUrl: './matiere-show.component.html',
  styleUrls: ['./matiere-show.component.scss']
})
export class MatiereShowComponent implements OnInit {

    matiere = {};

    constructor(private route: ActivatedRoute, private matiereService: MatiereService) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params['id'];
            this.matiereService.getOne(id).subscribe(data => {
                this.matiere = data;
                console.log('gestionnaire detail = ' + this.matiere );
            });
        });
    }
}
