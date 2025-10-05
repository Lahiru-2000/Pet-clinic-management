import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminClientService, Client, UpdateClientRequest } from '../../services/admin-client.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  client: Client | null = null;
  isLoading = false;
  isUpdating = false;
  userId: number = 0;

  editForm: UpdateClientRequest = {
    name: '',
    email: '',
    isAdmin: false
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adminClientService: AdminClientService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.userId = +params['id'];
        this.loadUser();
      }
    });
  }

  loadUser(): void {
    this.isLoading = true;
    this.adminClientService.getClientById(this.userId).subscribe({
      next: (client) => {
        this.client = client;
        this.editForm = {
          name: client.name,
          email: client.email,
          isAdmin: client.isAdmin
        };
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading user:', error);
        this.toastr.error('Failed to load user details', 'Error');
        this.isLoading = false;
        this.router.navigate(['/admin/clients']);
      }
    });
  }

  validateForm(): boolean {
    if (!this.editForm.name?.trim()) {
      this.toastr.error('Please enter user name', 'Validation Error');
      return false;
    }
    if (!this.editForm.email?.trim()) {
      this.toastr.error('Please enter email address', 'Validation Error');
      return false;
    }
    if (!this.isValidEmail(this.editForm.email)) {
      this.toastr.error('Please enter a valid email address', 'Validation Error');
      return false;
    }
    return true;
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  updateUser(): void {
    if (!this.validateForm()) {
      return;
    }

    // Convert isAdmin boolean to string for backend compatibility
    const payload = {
      ...this.editForm,
      isAdmin: this.editForm.isAdmin ? '1' : '0'
    };

    this.isUpdating = true;
    this.adminClientService.updateClient(this.userId, payload).subscribe({
      next: (updatedClient) => {
        console.log('User updated successfully:', updatedClient);
        this.toastr.success('User updated successfully!', 'Success');
        this.router.navigate(['/admin/clients']);
        this.isUpdating = false;
      },
      error: (error) => {
        console.error('Error updating user:', error);
        this.toastr.error('Failed to update user. Please try again.', 'Error');
        this.isUpdating = false;
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/admin/clients']);
  }

  getStatusBadgeClass(isAdmin: boolean): string {
    return isAdmin ? 'badge bg-primary' : 'badge bg-secondary';
  }

  getStatusText(isAdmin: boolean): string {
    return isAdmin ? 'Admin' : 'User';
  }
} 