import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdinateurService } from '../services/ordinateur.service';

@Component({
    selector: 'app-ordinateur-show',
    templateUrl: './ordinateur-show.component.html',
    styleUrls: ['./ordinateur-show.component.scss']
})
export class OrdinateurShowComponent implements OnInit {
    ordinateur = {};

    constructor(private route: ActivatedRoute, private router: Router, private ordinateurService: OrdinateurService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params['id'];
            this.ordinateurService.getOne(id).subscribe(data => {
                this.ordinateur = data;
                console.log('ordinateur detail = ' + this.ordinateur);
            });
        });
    }
}
