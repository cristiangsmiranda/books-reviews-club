const mongoose = require('mongoose');
require('dotenv').config();

async function initDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ Failed to connect to MongoDB:', err.message);
    process.exit(1); 
  }
}

module.exports = { initDb };
