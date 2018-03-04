import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {CursusService} from '../services/cursus.service';

declare var $: any;
@Component({
  selector: 'app-cursus-add',
  templateUrl: './cursus-add.component.html',
  styleUrls: ['./cursus-add.component.scss']
})
export class CursusAddComponent implements OnInit {

    cursusAddForm: FormGroup;

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private cursusService: CursusService) {
        this.cursusAddForm = new FormGroup({
            id: new FormControl(),
            titre: new FormControl()
        });
    }

    ngOnInit() {
        this.cursusAddForm = this.fb.group({
            'id': [''],
            'titre': [''],
        });
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
