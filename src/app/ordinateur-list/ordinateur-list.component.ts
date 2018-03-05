import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdinateurService } from '../services/ordinateur.service';

@Component({
  selector: 'app-ordinateur-list',
  templateUrl: './ordinateur-list.component.html',
  styleUrls: ['./ordinateur-list.component.scss']
})
export class OrdinateurListComponent implements OnInit {
  cols: any[];
  listMatos: any;
  constructor(private route: ActivatedRoute, private router: Router, private ordinateurService: OrdinateurService) {}

  ngOnInit() {
    this.ordinateurService.list().subscribe(data => {
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
    this.ordinateurService.delete(id).subscribe(data => {
        console.log('this.ordinateur = ' + data);
        this.router.navigateByUrl('/ordinateurs');
    });
}

}
