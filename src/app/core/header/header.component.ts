import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private isNavbarMenuCollapsed: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isNavbarMenuCollapsed = true;
  }

  onToggleNavbar() {
    this.isNavbarMenuCollapsed = !this.isNavbarMenuCollapsed;
  }

  isNavBarMenuVisible() {
    return !this.isNavbarMenuCollapsed;
  }
}
