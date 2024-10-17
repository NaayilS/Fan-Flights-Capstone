import express from 'express';
import UserTrip from '../models/UserTrip.js';

const router = express.Router();

router.post('/trip', async (req, res) => {
  const { user, team, game, flightDetails } = req.body;
  try {
    const newTrip = new UserTrip({ user, team, game, flightDetails });
    await newTrip.save();
    res.status(201).json(newTrip);
  } catch (error) {
    res.status(500).json({ message: 'Error creating trip' });
  }
});

export default router;
