import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './auth.service';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  title = 'RPCS';
  isDashboard = false;
  initializing = true;

  ngOnInit() {
    // Track the active URL and compute dashboard state only after the first navigation
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        const url: string = e.urlAfterRedirects || e.url || '';
        this.isDashboard = this.isDashboardRoute(url);
        this.initializing = false;
      });

    // If a URL is already present (direct load), set flags immediately once
    // and let the stream above keep it in sync for subsequent navigations.
    const current = this.router.url || '';
    if (current) {
      this.isDashboard = this.isDashboardRoute(current);
      this.initializing = false;
    }
  }

  private isDashboardRoute(url: string): boolean {
    // Normalize and check against known dashboard-related prefixes
    const path = url.split('?')[0];
    const prefixes = [
      '/dashboard', '/user-dashboard', '/admin-dashboard', '/admin',
      '/appointment', '/my-appointments', '/profile', '/user-profile',
      '/payments', '/view-users', '/pets', '/admin/appointments', '/admin/pets',
      '/admin/clients', '/admin/doctors', '/admin/services', '/admin/billing', '/admin/reports',
      '/login', '/signup'
    ];
    return prefixes.some(pref => path.startsWith(pref));
  }
}
