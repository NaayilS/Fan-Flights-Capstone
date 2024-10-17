import express from 'express';
import NBASchedule from '../models/nbaSchedule.js';
import moment from 'moment-timezone';

const router = express.Router();

router.get('/schedule', async (req, res) => {
  const userTimeZone = req.query.timezone || 'America/Chicago'; // Default timezone
  
  try {
    const schedules = await NBASchedule.find();

    // Convert the dateUtc field to the user's local time zone
    const schedulesWithLocalTime = schedules.map((schedule) => ({
      ...schedule.toObject(),
      localTime: moment(schedule.dateUtc).tz(userTimeZone).format('YYYY-MM-DD HH:mm:ss')
    }));

    res.status(200).json(schedulesWithLocalTime);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving NBA schedule' });
  }
});

export default router;
