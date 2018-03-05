import { Component, OnInit } from '@angular/core';
import { VideoprojModule } from '../videoproj-show/videoproj.module';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoprojService } from '../services/videoproj.service';

@Component({
  selector: 'app-videoproj-edit',
  templateUrl: './videoproj-edit.component.html',
  styleUrls: ['./videoproj-edit.component.scss']
})
export class VideoprojEditComponent implements OnInit {

  salle = new VideoprojModule(-1, "", 0, "");
  salleAddForm: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private matosService: VideoprojService) {
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
            });
        });
    });
}

onSubmit(): void {
    this.matosService.update(this.salleAddForm.value()).subscribe(data => {
        this.salle = data;
        console.log('vidéoprojecteur detail = ' + this.salle );
        this.router.navigateByUrl('/videoprojs');
    });
}
}
