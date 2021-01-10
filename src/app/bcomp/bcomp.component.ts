import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-bcomp',
  templateUrl: './bcomp.component.html',
  styleUrls: ['./bcomp.component.css']
})
export class BcompComponent implements OnInit {
  data: any

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private sharedData: SharedService
  ) { }

  ngOnInit(): void {
    this.sharedData.currentData.subscribe(data => this.data = data);

    this.activatedRoute.url
    .subscribe(url => console.log('The URL changed to: ' + url));
  }

  changeData() {
    this.sharedData.changeData({name: 'Messi'});
    this.router.navigate(['/acomp']);
  }
}
