import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormateurService} from "../services/formateur.service";
import {CompetenceService} from "../services/competence.service";
import {MatiereService} from '../services/matiere.service';

@Component({
  selector: 'app-formateur-show',
  templateUrl: './formateur-show.component.html',
  styleUrls: ['./formateur-show.component.scss']
})
export class FormateurShowComponent implements OnInit {

    formateur = {};
    competences = null;

    constructor(private route: ActivatedRoute, private formateurService: FormateurService, private competenceService: CompetenceService,
                private matiereService: MatiereService) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params['id'];
            this.formateurService.getOne(id).subscribe(data => {
                this.formateur = data;
                console.log('formateur detail = ' + this.formateur);

                this.competenceService.listAllByFormateurId(id).subscribe(data => {
                    this.competences = data;
                    console.log("this.competences = ", this.competences);
                });
            });
        });
    }
}
