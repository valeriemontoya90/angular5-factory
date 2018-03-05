import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrdinateurModule } from '../ordinateur-show/ordinateur.module';
import { FormGroup, FormBuilder } from '@angular/forms';
import { OrdinateurService } from '../services/ordinateur.service';

@Component({
  selector: 'app-ordinateur-edit',
  templateUrl: './ordinateur-edit.component.html',
  styleUrls: ['./ordinateur-edit.component.scss']
})
export class OrdinateurEditComponent implements OnInit {

  ordinateur = new OrdinateurModule(-1,"",0, "true","",0,0,null,"");
  ordinateurAddForm: FormGroup;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private ordinateurService: OrdinateurService) {
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
        const id = params['id'];
        console.log("ID == "+id);
        this.ordinateurService.getOne(id).subscribe(data => {
            this.ordinateur = data;
            console.log('ordinateur detail = ' + this.ordinateur);
            this.ordinateurAddForm = this.fb.group({
                'id': [this.ordinateur.id],
                'code': [this.ordinateur.code],
                'cout': [this.ordinateur.cout],
                'isDisponible': [this.ordinateur.isDisponible],

            });
        });
    });
}

onSubmit(): void {
    this.ordinateurService.update(this.ordinateurAddForm.value()).subscribe(data => {
        this.ordinateur = data;
        console.log('user detail = ' + this.ordinateur );
    });
}
}