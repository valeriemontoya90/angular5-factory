import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatosService} from "../matos.service";

@Component({
  selector: 'app-matos',
  templateUrl: './matos.component.html',
  styleUrls: ['./matos.component.scss']
})
export class MatosComponent implements OnInit {

    cols: any[];
    listMatos: any;

    constructor(private route: ActivatedRoute, private router: Router, private matosService: MatosService) {}

    ngOnInit() {
        this.matosService.list().subscribe(data => {
            this.listMatos = data;
            console.log('listMatos = ' + this.listMatos);
        });

        this.cols = [
            {field: 'id', header: 'ID'},
            {field: 'code', header: 'code'},
            {field: 'cout', header: 'cout'},
            {field: 'isDisponible', header: 'isDisponible'},
            {field: '', header: 'Actions'}
        ];
    }

    onDeleteOne(id: number): void {
        this.matosService.delete(id).subscribe(data => {
            console.log('this.salle = ' + data);
        });
    }
}
