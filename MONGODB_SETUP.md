# MongoDB Setup Guide

## Prerequisites
1. Install MongoDB on your system or use MongoDB Atlas (cloud service)
2. Node.js and npm installed

## Installation

1. Install MongoDB dependencies:
```bash
npm install mongodb mongoose
```

2. Create a `.env.local` file in the root directory with the following variables:
```env
# MongoDB Configuration
MONGODB_URI=mongodb+srv://manish091102:gauseva@cluster0.sij3u6j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Environment
NODE_ENV=development
```

## MongoDB Connection Options

### Option 1: Local MongoDB
1. Install MongoDB Community Server
2. Start MongoDB service
3. Use connection string: `mongodb+srv://manish091102:gauseva@cluster0.sij3u6j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

### Option 2: MongoDB Atlas (Recommended for production)
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get connection string from Atlas dashboard
4. Replace `MONGODB_URI` with your Atlas connection string

## Features Implemented

### Database Models
- **User Model**: Stores user information with automatic membership number generation
- **OTP Model**: Stores OTP data with automatic expiration and cleanup

### API Routes Updated
- `/api/auth/signup` - User registration with MongoDB
- `/api/auth/login` - User login with MongoDB OTP verification
- `/api/auth/send-otp` - OTP generation and storage in MongoDB
- `/api/auth/verify-otp` - OTP verification with MongoDB

### Static OTP Support
- All OTP verification routes accept "123456" as a static test OTP
- Useful for development and testing

## Database Features
- Automatic OTP expiration (10 minutes)
- Rate limiting (max 3 attempts per mobile per hour)
- Automatic cleanup of expired OTPs
- Unique mobile number validation
- Automatic membership number generation

## Testing
1. Start your development server: `npm run dev`
2. Use the static OTP "123456" for testing
3. All API endpoints now use MongoDB for data persistence 