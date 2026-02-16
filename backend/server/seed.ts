import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from './models/User';

dotenv.config();

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ptl-capital');
    console.log('Connected to MongoDB');

    // Create admin user
    const existingAdmin = await User.findOne({ email: 'admin@ptlcapital.com' });
    
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      const admin = new User({
        name: 'Admin User',
        email: 'admin@ptlcapital.com',
        password: hashedPassword,
        role: 'Admin',
      });
      await admin.save();
      console.log('Admin user created:');
      console.log('Email: admin@ptlcapital.com');
      console.log('Password: admin123');
    } else {
      console.log('Admin user already exists');
    }

    await mongoose.disconnect();
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
