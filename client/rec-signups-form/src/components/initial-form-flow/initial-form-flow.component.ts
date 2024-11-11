import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-initial-form-flow',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    RouterOutlet
  ],
  templateUrl: './initial-form-flow.component.html',
  styleUrl: './initial-form-flow.component.css'
})
export class InitialFormFlowComponent {
  // To manage which form card is currently displayed
  currentStep: number = 1;

  // Data model for the Parent/Guardian and Emergency Contact information
  parentGuardianOne = {
    name: '',
    phone: '',
    email: ''
  };

  parentGuardianTwo = {
    name: '',
    phone: '',
    email: ''
  };

  emergencyContact = {
    name: '',
    phone: '',
    email: ''
  };

  // Methods to handle navigation between steps
  goToNextStep(): void {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  goToPreviousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted', {
      parentGuardianOne: this.parentGuardianOne,
      parentGuardianTwo: this.parentGuardianTwo,
      emergencyContact: this.emergencyContact
    });
  }
}
