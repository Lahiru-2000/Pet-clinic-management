import { Component, OnInit } from '@angular/core';
import { AdminPetService, Pet, PetFilters, CreatePetRequest, UpdatePetRequest, Owner } from '../../services/admin-pet.service';
import { Router } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-admin-pets',
  templateUrl: './admin-pets.component.html',
  styleUrls: ['./admin-pets.component.scss']
})
export class AdminPetsComponent implements OnInit {
  pets: Pet[] = [];
  filteredPets: Pet[] = [];
  owners: Owner[] = [];
  

  isLoading = false;
  isCreating = false;
  isUpdating = false;
  isSearchingOwners = false;
  isDeleting = false;
  

  filters: PetFilters = {};
  petTypes = ['Dog', 'Cat', 'Bird', 'Rabbit', 'Hamster', 'Fish', 'Reptile', 'Other'];
  statusOptions = [
    { value: true, label: 'Active' },
    { value: false, label: 'Inactive' }
  ];

  currentPage = 1;
  itemsPerPage = 12;
  totalItems = 0;
  
 
  showCreateModal = false;
  showDeleteModal = false;

  currentPet: Pet | null = null;
 
  petForm: CreatePetRequest = {
    name: '',
    type: '',
    breed: '',
    age: 0,
    owner: '',
    gender: 'male',
    weight: 0,
    ownerName: '',
    ownerPhone: '',
    notes: ''
  };
  

  searchTerm = '';
  selectedType = '';
  selectedStatus: boolean | null = null;
  selectedOwner = '';
  ageMin: number | null = null;
  ageMax: number | null = null;
  registrationDateFrom = '';
  registrationDateTo = '';
  

  ownerSearchTerm = '';
  selectedOwnerForForm: Owner | null = null;

  constructor(
    private adminPetService: AdminPetService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadPets();
  }

  loadPets() {
    this.isLoading = true;
    this.adminPetService.getAllPets(this.filters).subscribe(
      (pets) => {
        this.pets = pets;
        this.applyFilters();
        this.isLoading = false;
      },
      (error) => {
        console.error('Error loading pets:', error);
        this.isLoading = false;
      }
    );
  }


  applyFilters() {
    this.filters = {
      search: this.searchTerm || undefined,
      type: this.selectedType || undefined,
      owner: this.selectedOwner || undefined,
      ageMin: this.ageMin || undefined,
      ageMax: this.ageMax || undefined,
      isActive: this.selectedStatus !== null ? this.selectedStatus : undefined,
      registrationDateFrom: this.registrationDateFrom || undefined,
      registrationDateTo: this.registrationDateTo || undefined
    };
    
    this.filteredPets = this.applyClientSideFilters(this.pets, this.filters);
    this.totalItems = this.filteredPets.length;
    this.currentPage = 1;
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedType = '';
    this.selectedStatus = null;
    this.selectedOwner = '';
    this.ageMin = null;
    this.ageMax = null;
    this.registrationDateFrom = '';
    this.registrationDateTo = '';
    this.filters = {};
    this.applyFilters();
  }

  private applyClientSideFilters(pets: Pet[], filters: PetFilters): Pet[] {
    return pets.filter(pet => {
      if (filters.search && !pet.name.toLowerCase().includes(filters.search.toLowerCase()) &&
          !pet.type.toLowerCase().includes(filters.search.toLowerCase()) &&
          !pet.breed.toLowerCase().includes(filters.search.toLowerCase()) &&
          !pet.owner.toLowerCase().includes(filters.search.toLowerCase()) &&
          !(pet.ownerName && pet.ownerName.toLowerCase().includes(filters.search.toLowerCase()))) {
        return false;
      }
      
      if (filters.type && pet.type !== filters.type) return false;
      if (filters.owner && pet.owner !== filters.owner) return false;
      if (filters.ageMin && pet.age < filters.ageMin) return false;
      if (filters.ageMax && pet.age > filters.ageMax) return false;
      if (filters.isActive !== undefined && pet.isActive !== filters.isActive) return false;
      
      if (filters.registrationDateFrom && pet.registrationDate) {
        if (new Date(pet.registrationDate) < new Date(filters.registrationDateFrom)) return false;
      }
      
      if (filters.registrationDateTo && pet.registrationDate) {
        if (new Date(pet.registrationDate) > new Date(filters.registrationDateTo)) return false;
      }
      
      return true;
    });
  }

  get paginatedPets(): Pet[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredPets.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  searchOwners() {
    if (this.ownerSearchTerm.length < 2) {
      this.owners = [];
      return;
    }
    
    this.isSearchingOwners = true;
    this.adminPetService.searchOwners(this.ownerSearchTerm).subscribe(
      (owners) => {
        this.owners = owners;
        this.isSearchingOwners = false;
      },
      (error) => {
        console.error('Error searching owners:', error);
        this.isSearchingOwners = false;
      }
    );
  }

  selectOwner(owner: Owner) {
    this.selectedOwnerForForm = owner;
    this.petForm.owner = owner.email;
    this.petForm.ownerName = owner.name;
    this.petForm.ownerPhone = owner.phone;
    this.owners = [];
    this.ownerSearchTerm = owner.name;
  }

 
  openCreateModal() {
    this.resetPetForm();
    this.showCreateModal = true;
    setTimeout(() => {
      const modalElement = document.getElementById('createPetModal');
      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }
    }, 100);
  }

  createPet() {
    if (!this.isValidPetForm()) return;
    
    this.isCreating = true;
    this.adminPetService.createPet(this.petForm).subscribe(
      (pet) => {
        console.log('Pet created successfully:', pet);
        this.loadPets();
        this.closeCreateModal();
        this.isCreating = false;
      },
      (error) => {
        console.error('Error creating pet:', error);
        this.isCreating = false;
      }
    );
  }

  openEditModal(pet: Pet) {
    this.router.navigate(['/admin/pets/edit', pet.id]);
  }



  openDeleteModal(pet: Pet) {
    this.currentPet = pet;
    this.showDeleteModal = true;
  }

  closeDeleteModal() {
    this.showDeleteModal = false;
    this.currentPet = null;
  }

  deletePet() {
    if (!this.currentPet) return;
    this.isDeleting = true;
    this.adminPetService.deletePet(this.currentPet.id).subscribe(
      () => {
        this.loadPets();
        this.closeDeleteModal();
        this.isDeleting = false;
      },
      (error) => {
        console.error('Error deleting pet:', error);
        this.isDeleting = false;
      }
    );
  }



  viewPetDetails(pet: Pet) {
    this.openDetailsModal(pet);
  }

  viewMedicalHistory(pet: Pet) {
    this.router.navigate(['/admin/pets/medical-history', pet.id]);
  }

  viewVaccinationRecords(pet: Pet) {
    this.router.navigate(['/admin/pets/vaccinations', pet.id]);
  }

  viewMedicalDocuments(pet: Pet) {
    this.router.navigate(['/admin/pets/documents', pet.id]);
  }


  closeCreateModal() {
    this.showCreateModal = false;
    const modalElement = document.getElementById('createPetModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) modal.hide();
    }
    this.resetPetForm();
  }


  isValidPetForm(): boolean {
    return !!(this.petForm.name && this.petForm.type && this.petForm.breed && 
              this.petForm.age > 0 && this.petForm.owner);
  }



  private resetPetForm() {
    this.petForm = {
      name: '',
      type: '',
      breed: '',
      age: 0,
      owner: '',
      gender: 'male',
      weight: 0,
      ownerName: '',
      ownerPhone: '',
      notes: ''
    };
    this.selectedOwnerForForm = null;
    this.ownerSearchTerm = '';
    this.owners = [];
  }


  getStatusBadgeClass(pet: Pet): string {
    return pet.isActive ? 'badge bg-success' : 'badge bg-secondary';
  }

  getStatusText(pet: Pet): string {
    return pet.isActive ? 'Active' : 'Inactive';
  }

  getAgeText(age: number): string {
    if (age === 1) return '1 year';
    if (age < 1) return `${Math.round(age * 12)} months`;
    return `${age} years`;
  }

  formatDate(dateString: string | undefined): string {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString();
  }

  openDetailsModal(pet: Pet) {
    this.currentPet = pet;
    setTimeout(() => {
      const el = document.getElementById('petDetailsModal');
      if (el) {
        const modal = new bootstrap.Modal(el, { backdrop: false });
        modal.show();
      }
    }, 50);
  }
} 