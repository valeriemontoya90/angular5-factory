import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatosService} from '../matos.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {SalleModule} from '../matos/salle.module';

declare var $: any;
@Component({
  selector: 'app-matos-salles-edit',
  templateUrl: './matos-salles-edit.component.html',
  styleUrls: ['./matos-salles-edit.component.scss']
})
export class MatosSallesEditComponent implements OnInit {

    salle = new SalleModule(-1, '', 0, '', 0);
    salleAddForm: FormGroup;

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private matosService: MatosService) {
        this.salleAddForm = new FormGroup({
            id: new FormControl(),
            code: new FormControl(),
            cout: new FormControl(),
            isDisponible: new FormControl(),
            capacite: new FormControl()
        });
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params['id'];
            console.log('ID == ' +  id);
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
        console.log('this.salleAddForm.getRawValue() = ' + this.salleAddForm.getRawValue());
        this.matosService.update(this.salleAddForm.getRawValue()).subscribe(data => {
            this.salle = data;
            console.log('salle detail = ' + this.salle.capacite );
            this.router.navigateByUrl('/salles');
            this.showNotification('top','right');
        },err => {
            console.log('err = ' , err.message);
            this.showNotification('top','right', 'danger', 'ECHEC - La connexion avec le serveur a échoué');
        })
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
