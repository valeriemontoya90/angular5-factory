import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StagiaireService} from "../services/stagiaire.service";

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.scss']
})
export class StagiaireComponent implements OnInit {
cols: any;
listStagiaire: any;
  constructor(private route: ActivatedRoute, private router: Router, private stagiaireService: StagiaireService ) { }

  ngOnInit() {
      this.stagiaireService.list().subscribe(data => {
          this.listStagiaire = data;
          console.log('listStagiaire = ' + this.listStagiaire);
      });
      this.cols = [
          {field: 'id', header: 'Id'},
          {field: 'nom', header: 'Nom'},
          {field: 'prenom', header: 'Prenom'},
          {field: 'adresse', header: 'Adresse'},
          {field: 'codePostal', header: 'Code Postal'},
          {field: 'mail', header: 'Mail'},
          {field: 'cursusDeFormation', header: 'Cursus'},
          {field: 'ordinateur', header: 'Ordinateur'},
          {field: '', header: 'Actions'}
      ];
  }
    onDeleteOne(id: number): void {
        this.stagiaireService.delete(id).subscribe(data => {
            console.log('this.stagiaire = ' + data);
            this.router.navigateByUrl('/stagiaires');
        });
    }

}
