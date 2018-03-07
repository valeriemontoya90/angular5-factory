import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { VideoprojService } from '../services/videoproj.service';
import { SelectItem } from 'primeng/api';


declare var $: any;
@Component({
    selector: 'app-videoproj-add',
    templateUrl: './videoproj-add.component.html',
    styleUrls: ['./videoproj-add.component.scss']
})
export class VideoprojAddComponent implements OnInit {

    videoprojAddForm: FormGroup;
    choixDispo: SelectItem[];
    selectedChoixDispo: string;

    constructor(private fb: FormBuilder, private router: Router, private videoprojService: VideoprojService) {
        this.selectedChoixDispo = "true";
        this.choixDispo = [
            { label: 'Disponible', value: 'true' },
            { label: 'Indisponible', value: 'false' }
        ];
        this.videoprojAddForm = new FormGroup({
            id: new FormControl(),
            code: new FormControl(),
            cout: new FormControl(),
            isDisponible: new FormControl()
        });
    }

    ngOnInit() {

        console.log('on rentre dans ngOnInit de VideoprojAddComponent');
        this.videoprojAddForm = this.fb.group({
            'id': [''],
            'code': [''],
            'cout': [''],
            'isDisponible': ['']
        });
    }

    onSubmit(): void {
        this.videoprojService.add(this.videoprojAddForm.getRawValue()).subscribe(data => {
            const videopro = data;
            console.log('Vidéo projecteur dans le add = ' + videopro.code);
            this.router.navigateByUrl('/videoprojs');
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