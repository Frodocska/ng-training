import { ViewChild, ElementRef, AfterViewInit, Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('div') input: ElementRef;
  constructor() { }

  ngOnInit() {

      

  }
  ngAfterViewInit() {
    console.log(jQuery("#sortable"));
    jQuery("#sortable").sortable();
  }

}
