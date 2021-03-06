import { Component, OnInit } from '@angular/core';
import {CursusModule} from '../entities/cursus.module';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CursusService} from '../services/cursus.service';
import {FormationModule} from '../entities/formation.module';
import {EventCalendar} from '../entities/eventCalendar.module';
import {FormateurService} from '../services/formateur.service';
import {MatiereService} from '../services/matiere.service';
import {FormateurModule} from '../entities/formateur.module';
import {FormationService} from '../services/formation.service';


declare var $: any;
@Component({
  selector: 'app-cursus-show',
  templateUrl: './cursus-show.component.html',
  styleUrls: ['./cursus-show.component.scss']
})
export class CursusShowComponent implements OnInit {

    cursus = new CursusModule(-1, "", null, null,  null, null);

    cursusAddForm: FormGroup;
    colsFormation: any[];
    headerScheduler: any;
    eventsScheduler = [{'title' : '', 'start' : '', 'end' : ''}];
    formations: any[];

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private cursusService: CursusService,
                private formateurService: FormateurService, private matiereService: MatiereService, private formationService: FormationService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params['id'];
            console.log('ID == ' +  id);
            this.cursusService.getOne(id).subscribe(data => {
                this.cursus = data;
                console.log('cursus  = ' , this.cursus);
                this.cursusAddForm = this.fb.group({
                    'id': [this.cursus.id],
                    'titre': [this.cursus.titre],
                    'dateDebut': [this.cursus.dateDebut],
                    'dateFin': [this.cursus.dateFin]
                });
                this.getEventCursus();

                this.formationService.list().subscribe(data => {
                    this.formations = data;
                    console.log('formations = ',  this.formations);
                    this.getEventsFormations();
                });
            });
        });

        this.colsFormation = [
            {field: 'id', header: 'ID'},
            {field: 'matiere', header: 'Matière'},
            {field: 'dateDebut', header: 'Date de début'},
            {field: 'dateFin', header: 'Date de fin'},
            {field: 'formateur', header: 'Formateur'}
        ];

        this.headerScheduler = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
    }

    encodeCursus(cursus: CursusModule): EventCalendar {
        let fixedDateFin = new Date(cursus.dateFin);
        fixedDateFin.setDate(fixedDateFin.getDate()+1)
        return {
            title: cursus.titre,
            start: cursus.dateDebut.toString(),
            end: fixedDateFin.toString(),
            backgroundColor: '#80D8FF',
            borderColor: '#80D8FF'
        };
    }

    encodeFormations(formation: FormationModule): EventCalendar {
        let fixedDateFin = new Date(formation.dateFin);
        fixedDateFin.setDate(fixedDateFin.getDate()+1)
        return {
            title: formation.matiere.titre,
            start: formation.dateDebut.toString(),
            end: fixedDateFin.toString(),
            backgroundColor: '#FF5722',
            borderColor: '#FF5722'
        };
    }

    getEventCursus(): void {
        if (this.cursus!=null) {
            this.eventsScheduler.push(this.encodeCursus(this.cursus));
        }
    }

    getEventsFormations(): void {
        if (this.formations!=null) {
            for(let formation of this.formations) {
                if(formation.dateDebut != null && formation.dateFin){
                    this.eventsScheduler.push(this.encodeFormations(formation));
                }
            }

        }
    }
}