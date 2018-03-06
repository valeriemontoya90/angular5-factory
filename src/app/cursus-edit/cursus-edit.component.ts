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

declare var $: any;
@Component({
  selector: 'app-cursus-edit',
  templateUrl: './cursus-edit.component.html',
  styleUrls: ['./cursus-edit.component.scss']
})
export class CursusEditComponent implements OnInit {

    cursus = new CursusModule(-1, "", null, null,  null, null);

    cursusAddForm: FormGroup;
    colsFormation: any[];
    headerScheduler: any;
    eventsScheduler = [{'title' : '', 'start' : '', 'end' : ''}];
    listFormateursAvailable: any[];
    listFormateursSelected: any[];
    listMatieres: {};
    formationSelected: any;

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private cursusService: CursusService,
                private formateurService: FormateurService, private matiereService: MatiereService) {
        this.cursusAddForm = new FormGroup({
            id: new FormControl(),
            titre: new FormControl(),
            dateDebut: new FormControl(),
            dateFin: new FormControl(),
            stagiaires: new FormControl(),
            formations: new FormControl()
        });
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params['id'];
            console.log('ID == ' +  id);
            this.cursusService.getOne(id).subscribe(data => {
                this.cursus = data;
                console.log('salle detail = ' + this.cursus);
                this.cursusAddForm = this.fb.group({
                    'id': [this.cursus.id],
                    'titre': [this.cursus.titre],
                    'dateDebut': [this.cursus.dateDebut],
                    'dateFin': [this.cursus.dateFin],
                    'stagiaires': [this.cursus.stagiaires],
                    'formations': [this.cursus.formations]
                });
                this.getEventCursus();
                this.getEventsFormations();
                this.listFormateursSelected = [];
            });
        });

        this.colsFormation = [
            {field: 'id', header: 'ID'},
            {field: 'matiere', header: 'Matière'},
            {field: 'dateDebut', header: 'Date de début'},
            {field: 'dateFin', header: 'Date de fin'},
            {field: 'formateur', header: 'Formateur'},
            {field: '', header: 'Actions'}
        ];

        this.headerScheduler = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
    }

    encodeCursus(cursus: CursusModule): EventCalendar {
        return {
            title: cursus.titre,
            start: cursus.dateDebut.toString(),
            end: cursus.dateFin.toString(),
            backgroundColor: '#80D8FF',
            borderColor: '#80D8FF'
        };
    }

    encodeFormations(formation: FormationModule): EventCalendar {
        return {
            title: formation.matiere.titre,
            start: formation.dateDebut.toString(),
            end: formation.dateFin.toString(),
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
        if (this.cursus.formations!=null) {
            for(let formation of this.cursus.formations) {
                this.eventsScheduler.push(this.encodeFormations(formation));
            }

        }
    }

    onSubmit(): void {
        console.log('this.cursusAddForm.getRawValue() = ' + this.cursusAddForm.getRawValue());
        this.cursusService.update(this.cursusAddForm.getRawValue()).subscribe(data => {
            console.log('cursus = ' + data);
            this.showNotification('top','right');
            this.router.navigateByUrl('/gestionnaires');
        },err => {
            console.log('err = ' , err.message);
            this.showNotification('top','right', 'danger', 'ECHEC - La connexion avec le serveur a échoué');
        })
    }

    editFormation(formation): void {
        $(".pickListFactory").show();
        $(".pickListFactory").show();
        this.formationSelected = formation;

        this.getListFormateurs(this.formationSelected.matiere.id);
    }

    getListFormateurs(matiereId: number): void{
        this.formateurService.listAllByMatiereId(matiereId).subscribe(data => {
            console.log('data = ' + data);
            this.listFormateursAvailable = data.map(f=> new FormateurModule(f[0],f[1],f[2],f[3],f[4],f[5] ,null, null, null));
            console.log('listFormateursAvailable = ', this.listFormateursAvailable);
        })
    }

    getListMatieres(): void {
        this.matiereService.list().subscribe(data => {
            this.listMatieres = data;
            console.log('listMatieres = ' + this.listMatieres);
        })
    }

    closePickList(): void {
        $(".pickListFactory").hide();
    }

    showNotification(from, align, type="success", message="SUCCES - Les modifications ont bien été sauvegardées"){
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
