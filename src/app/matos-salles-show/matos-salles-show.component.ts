import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatosService} from "../matos.service";

@Component({
  selector: 'app-matos-salles-show',
  templateUrl: './matos-salles-show.component.html',
  styleUrls: ['./matos-salles-show.component.scss']
})
export class MatosSallesShowComponent implements OnInit {
    salle = {};

    constructor(private route: ActivatedRoute, private matosService: MatosService) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params['id'];
            this.matosService.getOne(id).subscribe(data => {
                this.salle = data;
                console.log('salle detail = ' + this.salle );
            });
        });
    }
}
