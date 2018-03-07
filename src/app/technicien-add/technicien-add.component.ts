import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {TechnicienService} from '../services/technicien.service';
import {MaterielService} from '../services/materiel.service';
import {MatosService} from "../matos.service";
import {OrdinateurService} from "../services/ordinateur.service";
import {VideoprojService} from "../services/videoproj.service";
import {SalleModule} from "../entities/salle.module";
import {OrdinateurModule} from "../entities/ordinateur.module";

declare var $: any;
@Component({
    selector: 'app-technicien-add',
    templateUrl: './technicien-add.component.html',
    styleUrls: ['./technicien-add.component.scss']
})
export class TechnicienAddComponent implements OnInit {

    technicienAddForm: FormGroup;
    listMateriels= {};

    constructor
    (private fb: FormBuilder, private router: Router,
     private technicienService: TechnicienService, private materielService: MaterielService,
        private matosService: MatosService, private ordinateurService: OrdinateurService, private videoprojService: VideoprojService) {
        this.technicienAddForm = new FormGroup({
            id: new FormControl(),
            nom: new FormControl(),
            prenom: new FormControl(),
            adresse: new FormControl(),
            codePostal: new FormControl(),
            mail: new FormControl(),
            materiels: new FormControl()
        });
    }

    ngOnInit() {
        this.technicienAddForm = this.fb.group({
            'id': [''],
            'nom': [''],
            'prenom': [''],
            'adresse': [''],
            'codePostal': [''],
            'mail': [''],
            'materiels': ['']
        });
        this.getListMateriels();
    }

    getListMateriels(): void {
        this.materielService.list().subscribe(data =>{
            this.listMateriels = data;
            console.log('listMateriels =', this.listMateriels);
        });
    }

    onSubmit(): void {
        //TypeMateriel : VIDEOPROJECTEUR, SALLE, ORDINATEUR
        this.technicienService.add(this.technicienAddForm.getRawValue()).subscribe(data => {
            const technicien = data;
            console.log('this.technicien = ' + technicien.nom);
            this.showNotification('top', 'right');
            this.router.navigateByUrl('/techniciens');

            for (let matosId of this.technicienAddForm.getRawValue().materiels) {
                this.materielService.getOne(matosId).subscribe(data => {
                    let matosFind = data;
                    if (matosFind.type == "SALLE") {
                        this.matosService.getOne(matosId).subscribe(data => {
                            let salleFind = data;
                            let salleToUpdate = new SalleModule(salleFind.id, salleFind.code, salleFind.cout,
                                salleFind.isDisponible, salleFind.type, salleFind.capacite, technicien.id);

                            console.log("salleToUpdate = ", salleToUpdate);

                            this.matosService.update(salleToUpdate.toJSON()).subscribe(data => {
                                console.log("data this.matosService.update = ", data);
                            });
                        });
                    } else if (matosFind.type == "ORDINATEUR") {
                        this.ordinateurService.getOne(matosId).subscribe(data => {
                            let ordinateurFind = data;
                            let ordiToUpdate = new OrdinateurModule(ordinateurFind.id, ordinateurFind.code, ordinateurFind.cout,
                                ordinateurFind.isDisponible, ordinateurFind.type, technicien.id, ordinateurFind.processeur,
                                ordinateurFind.ram, ordinateurFind.hdd, ordinateurFind.dateAchat);

                            this.ordinateurService.update(ordiToUpdate.toJSON()).subscribe(data => {
                                console.log("data this.ordinateurService.update = ", data);
                            });
                        });
                    } else {

                    }
                });




                /*let competence = new CompetenceModule(-1, "AVANCE", matiereId, dataFormateur.id);
                console.log("competence = ", competence);
                this.competenceService.add(competence.toJSON()).subscribe(data => {
                    console.log('competence = ' + data);
                    this.showNotification('top','right');
                    this.router.navigateByUrl('/formateurs');
                },err => {
                    console.log('err = ' , err.message);
                    this.showNotification('top','right', 'danger', 'ECHEC - La connexion avec le serveur a échoué');
                });*/



            }

        }, err => {
            console.log('err = ', err.message);
            this.showNotification('top', 'right', 'danger', 'ECHEC - La connexion avec le serveur a échoué');
        });
    }

    showNotification(from, align, type = 'success', message = 'SUCCES - L\'ajout a bien été effectué') {
        $.notify({
            icon: 'notifications',
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
