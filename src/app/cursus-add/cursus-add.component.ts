import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {CursusService} from '../services/cursus.service';
import {EventService} from '../services/event.service';

declare var $: any;
@Component({
  selector: 'app-cursus-add',
  templateUrl: './cursus-add.component.html',
  styleUrls: ['./cursus-add.component.scss']
})
export class CursusAddComponent implements OnInit {

    cursusAddForm: FormGroup;
    events: any[];
    header: any;

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private cursusService: CursusService, private eventService: EventService) {
        this.cursusAddForm = new FormGroup({
            id: new FormControl(),
            titre: new FormControl(),
            dateDebut: new FormControl(),
            dateFin: new FormControl()
        });
    }

    ngOnInit() {
        this.cursusAddForm = this.fb.group({
            'id': [''],
            'titre': [''],
            'dateDebut': [''],
            'dateFin': ['']
        });

        /*this.eventService.getEvents().subscribe(events => {
            console.log('events = ' + events);
            this.events = events;});*/
        this.events = [
            {
                "title": "All Day Event",
                "start": "2018-02-01"
            },
            {
                "title": "Long Event",
                "start": "2018-02-10",
                "end": "2018-02-12"
            },
            {
                "title": "Repeating Event",
                "start": "2018-02-22T16:00:00",
                "end": "2018-03-12"
            }
        ];

        this.header = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
    }

    onSubmit(): void {
        console.log('this.cursusAddForm.getRawValue() = ' + this.cursusAddForm.getRawValue());
        this.cursusService.add(this.cursusAddForm.getRawValue()).subscribe(data => {
            console.log('cursusService = ' + data);
            this.showNotification('top','right');
            this.router.navigateByUrl('/cursus');
        },err => {
            console.log('err = ' , err.message);
            this.showNotification('top','right', 'danger', 'ECHEC - La connexion avec le serveur a échoué');
        })
    }

    showNotification(from, align, type="success", message="SUCCES - L'ajout a bien été effectué"){
        $.notify({
            icon: "notifications",
            message: message
        },{
            type: type,
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    }
}
