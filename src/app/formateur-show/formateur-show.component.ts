import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormateurService} from "../services/formateur.service";

@Component({
  selector: 'app-formateur-show',
  templateUrl: './formateur-show.component.html',
  styleUrls: ['./formateur-show.component.scss']
})
export class FormateurShowComponent implements OnInit {

    formateur = {};

    constructor(private route: ActivatedRoute, private formateurService: FormateurService) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params['id'];
            this.formateurService.getOne(id).subscribe(data => {
                this.formateur = data;
                console.log('formateur detail = ' + this.formateur );
            });
        });
    }
}
