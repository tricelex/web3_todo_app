import mongoose from "mongoose";
const { Schema } = mongoose;

const todoSchema = new Schema({
    title: String,
    description: String,
    date:{
        type:Date,
        default: new Date()
    },
    updateDate: String
});

const walletSchema = new Schema({
    address:{
        type:String,
        required:true
    },
    todo:[
        {
            type: Schema.Types.ObjectId,
            ref:'Todo'
        }
    ]
})

const Todo = mongoose.model('Todo', todoSchema);
const Wallet = mongoose.model('Wallet', walletSchema);
