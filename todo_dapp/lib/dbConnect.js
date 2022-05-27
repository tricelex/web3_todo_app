import mongoose from 'mongoose';


 const dbConnect= async () => mongoose.connect('mongodb://localhost:27017//todoDapp', {useNewUrlParser: true})

export default dbConnect;