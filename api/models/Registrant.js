const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the ParentInfo schema
const ParentInfoSchema = new Schema({
    fatherName: { type: String },
    fatherCellPhone: { type: String },
    fatherCoachInterest: { type: Boolean, default: false },
    fatherAssistantCoachInterest: { type: Boolean, default: false },
    motherName: { type: String },
    motherCellPhone: { type: String },
    motherCoachInterest: { type: Boolean, default: false },
    motherAssistantCoachInterest: { type: Boolean, default: false },
    emergencyContactName: { type: String, required: true },
    emergencyContactCellPhone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    zip: { type: String, required: true },
    physicianName: { type: String },
    physicianPhoneNumber: { type: String }
});

// Define the Medical schema
const MedicalSchema = new Schema({
    upToDateImmunizations: { type: Boolean, required: true },
    dateOfLastTetanusShot: { type: Date },
    allergies: { type: String },
    medication: { type: String },
    medicalConditions: { type: String }
});

// Define the PlayerInfo schema
const PlayerInfoSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    dateOfBirth: { type: Date, required: true },
    sport: { type: String, required: true },
    ageGroup: { type: String },
    shirtSize: { type: String },
    playsTravelBall: { type: Boolean, default: false },
    waiverSigned: { type: Boolean, default: false },
    medical: { type: MedicalSchema, required: true }
});

// Define the Registrant schema
const RegistrantSchema = new Schema({
    parentInfo: { type: ParentInfoSchema, required: true },
    playerInfo: { type: [PlayerInfoSchema], required: true }
});

// Create the model
mongoose.model('registrants', RegistrantSchema);
