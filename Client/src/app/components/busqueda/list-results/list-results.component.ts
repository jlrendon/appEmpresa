import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-list-results',
  templateUrl: './list-results.component.html',
  styles: []
})
export class ListResultsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showMap(){
    console.log('Show Map');
    $.fancybox.open('<div class="message"><h2>Hello!</h2><p>You are awesome!</p></div>');
  }

}
