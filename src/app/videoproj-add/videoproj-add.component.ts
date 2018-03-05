import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { VideoprojService } from '../services/videoproj.service';
import { SelectItem } from 'primeng/api';

interface City {
    name: string;
    code: string;
}

interface Choix {
    name: string;
    code: string;
}

@Component({
    selector: 'app-videoproj-add',
    templateUrl: './videoproj-add.component.html',
    styleUrls: ['./videoproj-add.component.scss']
})
export class VideoprojAddComponent implements OnInit {

    videoprojAddForm: FormGroup;
    keys: any;

    choixDispo: SelectItem[];
    selectedChoixDispo: Choix;

    selectedCity1: City;



    constructor(private fb: FormBuilder, private router: Router, private videoprojService: VideoprojService) {
        this.choixDispo = [
            { label: 'Disponible', value: 'false' },
            { label: 'Indisponible', value: 'true' }
        ];


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
        });
    }
}