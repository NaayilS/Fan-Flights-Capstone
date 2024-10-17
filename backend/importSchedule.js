import mongoose from 'mongoose';
import NBASchedule from './models/nbaSchedule.js';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

// Read the JSON file
const nbaScheduleData = JSON.parse(fs.readFileSync('./data/nbaSchedule.json', 'utf-8'));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('MongoDB connected');

    // Insert schedule data
    await NBASchedule.insertMany(nbaScheduleData);
    console.log('NBA schedule data imported successfully');
    
    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
