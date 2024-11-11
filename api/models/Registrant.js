const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonContactInfo = new Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String},
});

const AddressInfo = new Schema({
    streetAddress: {type: String, required: true},
    city: {type: String, required: true},
    zipCode: {type: String, required: true},
});

const ParentGuardianPhysicianInfoSchema = new Schema({
    parentGuardianOne: {type: PersonContactInfo, required: true},
    parentGuardianTwo: {type: PersonContactInfo},
    emergencyContact: {type: PersonContactInfo, required: true},
    physicianContact: {type: PersonContactInfo, required: true},
    addressInfo: {type: AddressInfo, required: true},
});

const MedicalSchema = new Schema({
    upToDateImmunizations: { type: Boolean, required: true },
    dateOfLastTetanusShot: { type: Date },
    allergies: { type: String },
    medication: { type: String },
    medicalConditions: { type: String }
});

const PlayerInfoSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    dateOfBirth: { type: Date, required: true },
    sport: { type: String, required: true },
    ageGroup: { type: String, required: true },
    shirtSize: { type: String, required: true },
    playsTravelBall: { type: Boolean, default: false },
    waiverSigned: { type: Boolean, default: false, required: true },
    medical: { type: MedicalSchema, required: true }
});

const RegistrantSchema = new Schema({
    parentInfo: { type: ParentGuardianPhysicianInfoSchema, required: true },
    playerInfo: { type: [PlayerInfoSchema], required: true }
});

// Create the model
mongoose.model('signups', RegistrantSchema);
