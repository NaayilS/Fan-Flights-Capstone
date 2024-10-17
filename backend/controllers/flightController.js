import axios from 'axios';

export const searchFlights = async (req, res) => {
  const { origin, destination, date } = req.body;

  try {
    const response = await axios.post('https://test.api.amadeus.com/v1/shopping/flight-offers', {
      origin,
      destination,
      date
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.AMADEUS_API_KEY}`
      }
    });

    // Extract flight information
    const flightData = response.data.data.map(flight => ({
      airline: flight.validatingAirlineCodes[0], // Airline code
      price: flight.price.total, // Total price of the flight
      departure: flight.itineraries[0].segments[0].departure, // Departure details
      arrival: flight.itineraries[0].segments[0].arrival // Arrival details
    }));

    res.status(200).json(flightData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching flight data' });
  }
};
