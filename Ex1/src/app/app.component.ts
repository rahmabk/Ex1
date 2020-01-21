import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ex1';
 
  isloged:boolean;

  ngOnInit(){this.isloged = false}
  connect(event){
this.isloged=event;
  }
  deconnecte(){
    this.isloged=false;
      }
}

