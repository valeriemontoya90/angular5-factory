import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatiereModule } from '../entities/matiere.module';
import { MatiereService } from '../services/matiere.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CursusShowComponent } from '../cursus-show/cursus-show.component';
import { CursusService } from '../services/cursus.service';
import { CursusModule } from '../entities/cursus.module';

@Component({
  selector: 'app-testdraganddrop',
  templateUrl: './testdraganddrop.component.html',
  styleUrls: ['./testdraganddrop.component.scss'],
  styles: [`
  .ui-grid li {
      list-style-type: none;
      padding: 10px;
      margin-bottom: 5px;
  }
`]
})
export class TestdraganddropComponent implements OnInit {

  availableCars: MatiereModule[];
  selectedCars: MatiereModule[];
  draggedCar: MatiereModule;

  cursus = new CursusModule(-1, "", null, null, null, null);
  colsFormation: any[];

  header: any;
  events: any[]; 
  viewDate: Date = new Date();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private matiereService: MatiereService,
    private cursusService: CursusService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.selectedCars = [];
    this.matiereService.list().subscribe(cars => {
      this.availableCars = cars
    });

    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log('ID == ' + id);
      this.cursusService.getOne(id).subscribe(data => {
        this.cursus = data;
        console.log('cursus detail = ' + this.cursus);
      });
    });

    this.colsFormation = [
      { field: 'id', header: 'ID' },
      { field: 'matiere', header: 'Matière' },
      { field: 'dateDebut', header: 'Date de début' },
      { field: 'dateFin', header: 'Date de fin' },
      { field: 'formateur', header: 'Formateur' }
    ];

    this.header = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    };

    this.events = [
      {
          "title": "All Day Event",
          "start": "2016-01-01"
      },
      {
          "title": "Long Event",
          "start": "2016-01-07",
          "end": "2016-01-10"
      },
      {
          "title": "Repeating Event",
          "start": "2016-01-09T16:00:00"
      },
      {
          "title": "Repeating Event",
          "start": "2016-01-16T16:00:00"
      },
      {
          "title": "Conference",
          "start": "2016-01-11",
          "end": "2016-01-13"
      }
  ];

  this.header = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
  };


  }

  myFunction(){
    console.log('action ....................');
  }

  dragStart(event, car: MatiereModule) {
    this.draggedCar = car;
  }

  drop(event) {
    if (this.draggedCar) {
      let draggedCarIndex = this.findIndex(this.draggedCar);
      this.selectedCars = [...this.selectedCars, this.draggedCar];
      this.availableCars = this.availableCars.filter((val, i) => i != draggedCarIndex);
      this.draggedCar = null;
    }
  }

  dragEnd(event) {
    this.draggedCar = null;
  }

  findIndex(car: MatiereModule) {
    let index = -1;
    for (let i = 0; i < this.availableCars.length; i++) {
      if (car.titre === this.availableCars[i].titre) {
        index = i;
        break;
      }
    }
    console.log('nombre de matieres selectionnées = ' + this.selectedCars.length);
    return index;
  }

}