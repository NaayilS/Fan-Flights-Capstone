import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import nbaRoutes from './routes/nbaRoutes.js';
import tripRoutes from './routes/tripRoutes.js';


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.use(express.json());
app.use('/api/nba', nbaRoutes);
app.use('/api/trips', tripRoutes);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
