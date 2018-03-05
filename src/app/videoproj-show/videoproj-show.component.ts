import { Component, OnInit } from '@angular/core';
import { VideoprojService } from '../services/videoproj.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videoproj-show',
  templateUrl: './videoproj-show.component.html',
  styleUrls: ['./videoproj-show.component.scss']
})
export class VideoprojShowComponent implements OnInit {
  videoproj = {};

  constructor(private route: ActivatedRoute, private router: Router, private ordinateurService: VideoprojService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      const id = params['id'];
      this.ordinateurService.getOne(id).subscribe(data => {
          this.videoproj = data;
          console.log('videoproj detail = ' + this.videoproj );
      });
  });


  }

}
