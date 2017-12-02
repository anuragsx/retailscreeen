import { Component, OnInit } from '@angular/core';
import { RouterModule, Router }   from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: string = 'World';

  constructor(private router: Router){
  }

  ngOnInit() {
    this.router.navigate(['/retail-screen']);
  }
  
}
