import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatosService} from "../matos.service";
import {StagiaireService} from "../services/stagiaire.service";
import {StagiaireModule} from "../stagiaire/stagiaire.module";

@Component({
  selector: 'app-stagiaire-edit',
  templateUrl: './stagiaire-edit.component.html',
  styleUrls: ['./stagiaire-edit.component.scss']
})
export class StagiaireEditComponent implements OnInit {
  stagiaireAddForm: FormGroup
  stagiaire= new StagiaireModule();
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private stagiaireService: StagiaireService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params['id'];
            console.log("ID == "+id);
            this.stagiaireService.getOne(id).subscribe(data => {
                this.stagiaire = data;
                console.log('salle detail = ' + this.stagiaire);
                this.stagiaireAddForm = this.fb.group({
                    'id': [this.stagiaire.id],
                    'nom': [this.stagiaire.nom],
                    'cout': [this.stagiaire.prenom],
                    'isDisponible': [this.stagiaire.adresse],
                    'capacite': [this.stagiaire.capacite]
                });
            });
        });
    }

}
