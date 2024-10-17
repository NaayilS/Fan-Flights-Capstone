import mongoose from 'mongoose';

const scheduleSchema = new mongoose.Schema({
  matchNumber: Number,
  roundNumber: Number,
  dateUtc: String,
  location: String,
  homeTeam: String,
  awayTeam: String,
  homeTeamScore: Number,
  awayTeamScore: Number
});

const NBASchedule = mongoose.model('NBASchedule', scheduleSchema);

export default NBASchedule;
