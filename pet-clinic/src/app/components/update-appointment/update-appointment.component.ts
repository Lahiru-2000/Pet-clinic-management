import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrl: './update-appointment.component.scss'
})
export class UpdateAppointmentComponent implements OnInit{

  username: string | null = '';
  useremail: string | null = '';
  userIsAdmin: string | null = '';

  appointments: any[] = []; 
  filteredAppointments: any[] = []; 
  doctors: any[] = []; 
  editingAppointment: any = null; 

  @ViewChild('editModal') editModal!: TemplateRef<any>;
  modalRef?: BsModalRef;

  constructor(private authService: AuthService, private http: HttpClient, private toastr: ToastrService, private router: Router, private modalService: BsModalService){}

  ngOnInit(): void {
    this.username = this.authService.getUsername();
    this.useremail = this.authService.getUserEmail();
    this.userIsAdmin = this.authService.getUserIsAdmin();

    console.log("userIsAdmin: " , this.userIsAdmin);

    this.fetchAppointments(); 
    this.fetchDoctors(); 
  }


  fetchAppointments() {
    this.http.get<any[]>('http://localhost:8000/api/appointments')
      .subscribe((data) => {
        console.log("data: ", data);
        console.log("is admin: ", this.userIsAdmin);
        if (this.userIsAdmin == 'true') {
          console.log("true User Email: ", this.useremail);
          this.appointments = data; 
        } else {
          console.log("else User Email: ", this.useremail);
        
          this.appointments = data.filter(appointment => appointment.email === this.useremail);
        }
        this.filteredAppointments = [...this.appointments]; 
      }, (error) => {
        console.error('Error fetching appointments:', error);
      });
  }


  fetchDoctors(): void {
    this.http.get<any[]>('http://localhost:8000/api/doctors') 
      .subscribe(
        (data) => {
          this.doctors = data;
        },
        (error) => {
          console.error('Error fetching doctors:', error);
        }
      );
  }


  onEdit(appointment: any) {
    this.editingAppointment = { ...appointment }; 
    
    setTimeout(() => {
      this.modalRef = this.modalService.show(this.editModal);
    });
  }

  closeModal() {
    this.modalRef?.hide();
    this.editingAppointment = null;
  }

 
  onUpdate() {
    const updatedAppointment = { ...this.editingAppointment };

 
    this.http.put(`http://localhost:8000/api/updateappointments/${updatedAppointment.id}`, updatedAppointment)
      .subscribe((response: any) => {
        this.toastr.success('Appointment updated successfully!', 'Success');
        this.closeModal();
        this.fetchAppointments(); 
      }, (error: any) => {
        console.error('Error updating appointment:', error);
        this.toastr.error('Failed to update appointment.', 'Error');
      });
  }

  onDelete(appointmentId: number) {
    if (confirm('Are you sure you want to delete this appointment?')) {
      this.http.delete(`http://localhost:8000/api/deleteappointment/${appointmentId}`)
        .subscribe((response: any) => {
          this.toastr.success('Appointment deleted successfully!', 'Success');
          this.fetchAppointments(); 
        }, (error: any) => {
          console.error('Error deleting appointment:', error);
          this.toastr.error('Failed to delete appointment.', 'Error');
        });
    }
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
