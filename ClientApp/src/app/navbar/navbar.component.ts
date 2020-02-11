import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isActive: boolean;

  constructor() { }

  ngOnInit(): void {
  }
 // toggle navbar on mobile view
 toggleNavbar() {
  this.isActive = !this.isActive;
}
}
