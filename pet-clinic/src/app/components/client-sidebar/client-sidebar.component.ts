
import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-sidebar',
  templateUrl: './client-sidebar.component.html',
  styleUrl: './client-sidebar.component.scss'
})
export class ClientSidebarComponent implements OnInit {

  username: string | null = '';
  useremail: string | null = '';
  userIsAdmin: string | null = '';
  isAdmin: boolean = false;


  isSidebarOpen: boolean = false;
  isMobile: boolean = false;


  isAppointmentCollapsed = true;


  isAppointmentMgmtCollapsed = true;
  isPetRecordsCollapsed = true;
  isClientMgmtCollapsed = true;
  isStaffMgmtCollapsed = true;
  isServiceMgmtCollapsed = true;
  isBillingCollapsed = true;
  isReportsCollapsed = true;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.username = this.authService.getUsername();
    this.useremail = this.authService.getUserEmail();
    this.userIsAdmin = this.authService.getUserIsAdmin();
    
 
    this.isAdmin = this.userIsAdmin === '1' || this.userIsAdmin === 'true';

    this.checkScreenSize();

    console.log("Username: ", this.username);
    console.log("Is Admin: ", this.isAdmin);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
    if (!this.isMobile) {
      this.isSidebarOpen = true; 
    } else {
      this.isSidebarOpen = false;
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    if (this.isMobile) {
      this.isSidebarOpen = false;
    }
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  toggleAppointmentMgmt() {
    this.isAppointmentMgmtCollapsed = !this.isAppointmentMgmtCollapsed;
  }

  togglePetRecords() {
    this.isPetRecordsCollapsed = !this.isPetRecordsCollapsed;
  }

  toggleClientMgmt() {
    this.isClientMgmtCollapsed = !this.isClientMgmtCollapsed;
  }

  toggleStaffMgmt() {
    this.isStaffMgmtCollapsed = !this.isStaffMgmtCollapsed;
  }

  toggleServiceMgmt() {
    this.isServiceMgmtCollapsed = !this.isServiceMgmtCollapsed;
  }

  toggleBilling() {
    this.isBillingCollapsed = !this.isBillingCollapsed;
  }

  toggleReports() {
    this.isReportsCollapsed = !this.isReportsCollapsed;
  }
}

