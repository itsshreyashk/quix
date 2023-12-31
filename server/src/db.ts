import mongoose from 'mongoose';


const connectionString : string = "mongodb://localhost:27017"
const connectDB : any = async () => {
    try {
        const options: any = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        await mongoose.connect(connectionString, options);
        console.log('MongoDB Connected');
    } catch (error : any) {
        console.error('Error connecting to MongoDB:', error);
    }
};

export default connectDB;