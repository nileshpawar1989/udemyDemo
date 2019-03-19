import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemyDemo';
  loadSelected = 'recipe';
  onNavigate(feature : string){
    this.loadSelected= feature;
    console.log(this.loadSelected);
  }
}
