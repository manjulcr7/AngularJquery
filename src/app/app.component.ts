import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JqueryAngular';
  ngOnInit(): void {
    $(document).ready(function(){
      $("button").click(function(){
        $("div").animate({
          left: '250px',
          height: '+=150px',
          width: '+=150px'
        });
      });
    });
  }
}
