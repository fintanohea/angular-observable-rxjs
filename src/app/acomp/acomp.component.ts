import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { SharedService } from '../shared.service';

@Component({
  selector: 'app-acomp',
  templateUrl: './acomp.component.html',
  styleUrls: ['./acomp.component.css']
})
export class AcompComponent implements OnInit {
  data: any
  navStart: Observable<NavigationStart>

  constructor(
    private router: Router, 
    private sharedData: SharedService
  ) { 
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;
  }

  ngOnInit(): void {
    this.sharedData.currentData.subscribe(data => this.data = data);

    this.navStart.subscribe(evt => console.log('Navigation Started!'));
  }

  changeData() {
    this.sharedData.changeData({name: 'Eric Cantona'});
    this.router.navigate(['/bcomp']);
  }
}
