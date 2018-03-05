import { OrdinateurService } from './../services/ordinateur.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordinateur-add',
  templateUrl: './ordinateur-add.component.html',
  styleUrls: ['./ordinateur-add.component.scss']
})
export class OrdinateurAddComponent implements OnInit {
  ordinateurAddForm: FormGroup;
  keys: any;
 
  constructor(private fb: FormBuilder, private router: Router, private ordinateurService: OrdinateurService) {
  }

  ngOnInit() {
      this.ordinateurAddForm = this.fb.group({
          'id': [''],
          'code': [''],
          'cout': [''],
          'isDisponible': [''],
          'processeur': [''],
          'ram': [''],
          'disqueDur': [''],
          'anneeAchat': ['']
      });
  }

  onSubmit(): void {
      this.ordinateurService.add(this.ordinateurAddForm.getRawValue()).subscribe(data => {
          const ordinateur = data;
          console.log('this.ordinateur = ' + ordinateur);
          this.router.navigateByUrl('/ordinateurs');
      });
  }
}
