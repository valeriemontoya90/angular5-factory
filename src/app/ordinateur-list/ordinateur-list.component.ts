import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdinateurService } from '../services/ordinateur.service';
declare var $: any;
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
    this.refreshList();

    this.cols = [
        {field: 'id', header: 'ID'},
        {field: 'code', header: 'code'},
        {field: 'cout', header: 'cout'},
        //{field: 'isDisponible', header: 'isDisponible'},
        {field: '', header: 'Actions'}
    ];    
  }

refreshList(){

    this.ordinateurService.list().subscribe(data => {
        this.listMatos = data;
    });

};

  onDeleteOne(id: number): void {
    this.ordinateurService.delete(id).subscribe(data => {
        console.log('this.ordinateur = ' + data);
        this.router.navigateByUrl('/ordinateurs');
        this.showNotification('top','right');
        this.refreshList();
    },err => {
        console.log('err = ' , err.message);
        this.showNotification('top','right', 'danger', 'ECHEC - La connexion avec le serveur a échoué');
    })
}


showNotification(from, align, type="success", message="SUCCES - La suppresion a bien fonctionné"){
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
