const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', authRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Test Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// ✅ Dynamic port for Render
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
