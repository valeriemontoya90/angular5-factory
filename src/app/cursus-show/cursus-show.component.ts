import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CursusService} from '../services/cursus.service';
import {CursusModule} from '../entities/cursus.module';


declare var $: any;
@Component({
  selector: 'app-cursus-show',
  templateUrl: './cursus-show.component.html',
  styleUrls: ['./cursus-show.component.scss']
})
export class CursusShowComponent implements OnInit {

    cursus = new CursusModule(-1, "", null, null,  null, null);
    colsFormation: any[];
    header: any;

    constructor(private route: ActivatedRoute, private router: Router, private cursusService: CursusService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params['id'];
            console.log('ID == ' + id);
            this.cursusService.getOne(id).subscribe(data => {
                this.cursus = data;
                console.log('cursus detail = ' + this.cursus);
            });
        });

        this.colsFormation = [
            {field: 'id', header: 'ID'},
            {field: 'matiere', header: 'Matière'},
            {field: 'dateDebut', header: 'Date de début'},
            {field: 'dateFin', header: 'Date de fin'},
            {field: 'formateur', header: 'Formateur'}
        ];

        this.header = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
    }
}
