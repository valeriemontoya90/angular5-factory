import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { MatosService } from "../matos.service";
declare var $: any;

@Component({
    selector: 'app-matos-salles-add',
    templateUrl: './matos-salles-add.component.html',
    styleUrls: ['./matos-salles-add.component.scss']
})
export class MatosSallesAddComponent implements OnInit {

    salleAddForm: FormGroup;
    keys: any;

    constructor(private fb: FormBuilder, private router: Router, private matosService: MatosService) {
        this.salleAddForm = new FormGroup({
            id: new FormControl(),
            code: new FormControl(),
            cout: new FormControl(),
            isDisponible: new FormControl(),
            capacite: new FormControl()
        });
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
            this.router.navigateByUrl('/salles');
            this.showNotification('top', 'right');
        }, err => {
            console.log('err = ', err.message);
            this.showNotification('top', 'right', 'danger', 'ECHEC - La connexion avec le serveur a échoué');
        })
    }

    showNotification(from, align, type = "success", message = "SUCCES - L'ajout a bien été effectué") {
        $.notify({
            icon: "notifications",
            message: message
        }, {
                type: type,
                timer: 4000,
                placement: {
                    from: from,
                    align: align
                }
            });
    }
}
