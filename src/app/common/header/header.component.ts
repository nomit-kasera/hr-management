import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() sidenav!: MatSidenav;
  notificationCount = 5;
  showAdminPopup = false;
  admin = {
    name: 'Admin User',
    email: 'admin@example.com',
    avatar: 'https://i.pravatar.cc/150?img=12'
  };
  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }

  toggleAdminPopup() {
    this.showAdminPopup = !this.showAdminPopup;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.admin-wrapper')) {
      this.showAdminPopup = false;
    }
  }

  onMenuClick(action: string) {
    this.showAdminPopup = false;
  }

}
