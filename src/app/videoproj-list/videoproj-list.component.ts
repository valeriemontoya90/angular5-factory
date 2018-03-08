import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatosService } from '../matos.service';
import { VideoprojService } from '../services/videoproj.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, Message } from 'primeng/api';
declare var $: any;
@Component({
  selector: 'app-videoproj-list',
  templateUrl: './videoproj-list.component.html',
  styleUrls: ['./videoproj-list.component.scss'],
  providers: [ConfirmationService]
})
export class VideoprojListComponent implements OnInit {
  msgs: Message[] = [];
  cols: any[];
  listVideoprojs: any; S

  constructor(private route: ActivatedRoute, private router: Router, private videoprojService: VideoprojService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.refreshList();

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'code', header: 'code' },
      { field: 'cout', header: 'cout' },
      { field: '', header: 'Actions' }
    ];
  }

  refreshList() {
    this.videoprojService.list().subscribe(data => {
      this.listVideoprojs = data;
    });
  };

  onDeleteOne(id: number): void {
    console.log('on rentre dans le delete');
    this.videoprojService.delete(id).subscribe(data => {
      this.router.navigateByUrl('/videoprojs');
      this.showNotification('top', 'right');
      this.refreshList();
    }, err => {
      console.log('err = ', err.message);
      this.showNotification('top', 'right', 'danger', 'ECHEC - La connexion avec le serveur a échoué');
    })
  }

  confirm(id: number) {
    console.log('on rentre dans le confirm');

    this.confirmationService.confirm({
      message: 'Confirmez-vous la supression du vidéo projecteur ' + id,
      header: "Supression d'un vidéo projecteur",
      icon: 'fa fa-trash',
      accept: () => {
        this.onDeleteOne(id);
      }
    });
  }

  showNotification(from, align, type = "success", message = "SUCCES - La suppresion a bien fonctionné") {
    $.notify({
      icon: "notifications",
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
