import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {StagiaireService} from "../services/stagiaire.service";

@Component({
  selector: 'app-stagiaire-add',
  templateUrl: './stagiaire-add.component.html',
  styleUrls: ['./stagiaire-add.component.scss']
})
export class StagiaireAddComponent implements OnInit {
stagiaireAddForm: FormGroup;
Keys: any;
  constructor(private fb: FormBuilder, private router: Router, private stagiaireService: StagiaireService) {
  }

  ngOnInit() {
      this.stagiaireAddForm = this.fb.group({
          'id': [''],
          'nom': [''],
          'prenom': [''],
          'adresse': [''],
          'codePostal': [''],
          'mail': [''],
          'cursusDeformation': [''],
          'ordinateur': ['']
      });
  }
    onSubmit(): void {
        this.stagiaireService.add(this.stagiaireAddForm.getRawValue()).subscribe(data => {
            const stagiaire = data;
            console.log('this.stagiaire = ' + stagiaire);
            this.router.navigateByUrl('/stagiaires');
        });
    }

}
