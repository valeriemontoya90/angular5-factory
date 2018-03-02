import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatosService} from "../matos.service";

@Component({
    selector: 'app-matos-salles-add',
    templateUrl: './matos-salles-add.component.html',
    styleUrls: ['./matos-salles-add.component.scss']
})
export class MatosSallesAddComponent implements OnInit {

    salleAddForm: FormGroup;
    keys: any;

    constructor(private fb: FormBuilder, private router: Router, private matosService: MatosService) {
    }

    ngOnInit() {
        this.salleAddForm = this.fb.group({
            'id': [''],
            'code': [''],
            'cout': [''],
            'isDisponible': [''],
            'capacite': ['']
        });
    }

    onSubmit(): void {
        this.matosService.add(this.salleAddForm.getRawValue()).subscribe(data => {
            const salle = data;
            console.log('this.salle = ' + salle);
            this.router.navigateByUrl('/salles');
        });
    }
}
