import { Component, OnInit } from '@angular/core';
import { VideoprojModule } from '../videoproj-show/videoproj.module';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoprojService } from '../services/videoproj.service';

declare var $: any;
@Component({
    selector: 'app-videoproj-edit',
    templateUrl: './videoproj-edit.component.html',
    styleUrls: ['./videoproj-edit.component.scss']
})
export class VideoprojEditComponent implements OnInit {

    salle = new VideoprojModule(-1, "", 0, "");
    videoProjAddForm: FormGroup;

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private matosService: VideoprojService) {
        this.videoProjAddForm = new FormGroup({
            id: new FormControl(),
            code: new FormControl(),
            cout: new FormControl(),
            isDisponible: new FormControl()
        });
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params['id'];
            console.log("ID == " + id);
            this.matosService.getOne(id).subscribe(data => {
                this.salle = data;
                console.log('salle detail = ' + this.salle);
                this.videoProjAddForm = this.fb.group({
                    'id': [this.salle.id],
                    'code': [this.salle.code],
                    'cout': [this.salle.cout],
                    'isDisponible': [this.salle.isDisponible],
                });
            });
        });
    }

    onSubmit(): void {
        this.matosService.update(this.videoProjAddForm.getRawValue()).subscribe(data => {
            this.salle = data;
            console.log('vidéoprojecteur detail = ' + this.salle);
            this.router.navigateByUrl('/videoprojs');
            this.showNotification('top', 'right');
        }, err => {
            console.log('err = ', err.message);
            this.showNotification('top', 'right', 'danger', 'ECHEC - La connexion avec le serveur a échoué');
        })
    }

    showNotification(from, align, type = "success", message = "SUCCES - Les modifications ont bien été sauvegardées") {
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
