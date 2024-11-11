import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { response } from "express";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgForOf],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private apiUrl: string = 'http://localhost:3000/api/v1/registrants'

  registrant = {
    parentInfo: {
      parentGuardianOne: { name: '', phone: '', email: '' },
      emergencyContact: { name: '', phone: '', email: '' },
      physicianContact: { name: '', phone: '', email: '' },
      addressInfo: { streetAddress: '', city: '', zipCode: '' }
    },
    playerInfo: [
      {
        name: '',
        age: null,
        dateOfBirth: null,
        sport: 'baseball',
        ageGroup: '8U',
        shirtSize: '',
        playsTravelBall: false,
        waiverSigned: false,
        medical: {
          upToDateImmunizations: false,
          dateOfLastTetanusShot: null,
          allergies: '',
          medication: '',
          medicalConditions: ''
        }
      }
    ]
  };

  constructor(private http: HttpClient) {}

  addPlayer() {
    this.registrant.playerInfo.push({
      name: '',
      age: null,
      dateOfBirth: null,
      sport: 'baseball',
      ageGroup: '8U',
      shirtSize: '',
      playsTravelBall: false,
      waiverSigned: false,
      medical: {
        upToDateImmunizations: false,
        dateOfLastTetanusShot: null,
        allergies: '',
        medication: '',
        medicalConditions: ''
      }
    });
  }

  onSubmit() {
    this.http.post(this.apiUrl, this.registrant)
      .subscribe({
        error: err => {
          console.error('Error saving registrant', err)
        },
        next: () => {
          console.log('Registrant saved successfully', this.registrant);
        }
      });
  }
}
