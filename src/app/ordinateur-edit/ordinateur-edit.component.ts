import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { OrdinateurService } from '../services/ordinateur.service';
import {OrdinateurModule} from '../entities/ordinateur.module';

declare var $: any;
@Component({
  selector: 'app-ordinateur-edit',
  templateUrl: './ordinateur-edit.component.html',
  styleUrls: ['./ordinateur-edit.component.scss']
})
export class OrdinateurEditComponent implements OnInit {

  ordinateur = new OrdinateurModule(-1,"",0, true,"",null,"0",null,-1, null);
  ordinateurAddForm: FormGroup;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private ordinateurService: OrdinateurService) {
    this.ordinateurAddForm = new FormGroup({
        id: new FormControl(),
        code: new FormControl(),
        cout: new FormControl(),
        isDisponible: new FormControl(),
        processeur: new FormControl(),
        ram: new FormControl(),
        disqueDur: new FormControl(),
        anneeAchat: new FormControl(),
    });  
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
                'processeur': [this.ordinateur.processeur],
                'ram': [this.ordinateur.ram],
                'disqueDur': [this.ordinateur.disqueDur],
                'anneeAchat': [this.ordinateur.anneeAchat],
            });
        });
    });
}

onSubmit(): void {
    this.ordinateurService.update(this.ordinateurAddForm.getRawValue()).subscribe(data => {
        this.ordinateur = data;
        this.router.navigateByUrl('/ordinateurs');
        this.showNotification('top','right');
    },err => {
        console.log('err = ' , err.message);
        this.showNotification('top','right', 'danger', 'ECHEC - La connexion avec le serveur a échoué');
    })
}

showNotification(from, align, type="success", message="SUCCES - Les modifications ont bien été sauvegardées"){
    $.notify({
        icon: "notifications",
        message: message
    },{
        type: type,
        timer: 4000,
        placement: {
            from: from,
            align: align
        }
    });
}
}
