import mongoose from "mongoose";
import dbConnect from '../lib/dbConnect'
const { Schema, model, models } = mongoose;


const todoSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    description:{
        type: String,
        required: true
    } ,
   createdDate:{
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

export const Todo = models.Todo || model('Todo', todoSchema);
export const Wallet =models.Todo || model('Wallet', walletSchema);

// const test = new Todo({
//     title: 'Test1', description: 'This is a test'
// })

// const varSave = new Todo;
// varSave.save();
// console.log(varSave);

// const makeWallet = async () => {
//     const wallet = new Wallet({ address:'gvh754',})
//     const  testCase = await Todo.findOne({title: 'Test1'})
//     wallet.todo.push(testCase);
//     await wallet.save();
//     console.log(wallet);
// }
// makeWallet();