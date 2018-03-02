import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matos',
  templateUrl: './matos.component.html',
  styleUrls: ['./matos.component.scss']
})
export class MatosComponent implements OnInit {

    cols: any[];

    constructor() { }

    ngOnInit() {

        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    }

}
