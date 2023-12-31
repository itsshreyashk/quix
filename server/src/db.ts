import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const options: any = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        await mongoose.connect('your_mongodb_connection_string', options);
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

export default connectDB;