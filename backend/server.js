const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const workoutRoutes = require('./routes/workoutRoutes');
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use('/', workoutRoutes);

app.get('/exercises', async (req, res) => {}),
	app.post('/exercises', async (req, res) => {}),
	app.put('/exercises/:id', async (req, res) => {}),
	app.delete('/exercises/:id', async (req, res) => {}),
	app.listen(port, () => console.log(`Server is running on Port ${port}`));
