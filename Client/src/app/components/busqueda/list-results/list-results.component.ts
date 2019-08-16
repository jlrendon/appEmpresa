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
    //$.fancybox.open('<div class="message"><h2>Hello!</h2><p>You are awesome!</p></div>');
    $.fancybox.open({
      src  : 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.492291371422!2d12.4922309!3d41.8902102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1524815927977',
      type : 'iframe',
      opts : {
        afterShow : function( instance, current ) {
          console.info( 'done!' );
        }
      }
    });
  }

}
