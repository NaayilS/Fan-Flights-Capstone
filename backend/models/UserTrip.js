import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
  user: String,
  team: String,
  game: String,
  flightDetails: {
    flightNumber: String,
    departure: String,
    arrival: String,
  },
});

const UserTrip = mongoose.model('UserTrip', tripSchema);

export default UserTrip;
