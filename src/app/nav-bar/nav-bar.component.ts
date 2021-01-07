import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  faBars = faBars;

  constructor() { }

  ngOnInit() {
  }

  open(): void {
    document.getElementById('mySidebar').style.width = '70%';
    // document.getElementById('main').style.marginLeft = '250px';
  }

  close(): void {
    document.getElementById('mySidebar').style.width = '0';
    // document.getElementById('main').style.marginLeft= '0';
  }

}
