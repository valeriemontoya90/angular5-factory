import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatosService} from "../matos.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {SalleModule} from "../matos/salle.module";

@Component({
  selector: 'app-matos-salles-edit',
  templateUrl: './matos-salles-edit.component.html',
  styleUrls: ['./matos-salles-edit.component.scss']
})
export class MatosSallesEditComponent implements OnInit {

    salle = new SalleModule(-1, "", 0, "", 0);
    salleAddForm: FormGroup;

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private matosService: MatosService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params['id'];
            console.log("ID == "+id);
            this.matosService.getOne(id).subscribe(data => {
                this.salle = data;
                console.log('salle detail = ' + this.salle);
                this.salleAddForm = this.fb.group({
                    'id': [this.salle.id],
                    'code': [this.salle.code],
                    'cout': [this.salle.cout],
                    'isDisponible': [this.salle.isDisponible],
                    'capacite': [this.salle.capacite]
                });
            });
        });
    }

    onSubmit(): void {
        this.matosService.update(this.salleAddForm.value()).subscribe(data => {
            this.salle = data;
            console.log('user detail = ' + this.salle );
        });
    }
}
