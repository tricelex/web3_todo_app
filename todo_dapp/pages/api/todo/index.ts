// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from "../../../lib/dbConnect";

import { Wallet } from '../../../models/appDb';
import { Todo } from '../../../models/appDb';

// type Data = {
//   name: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { address } = req.body;
    console.log(typeof(address), address);

    console.log("Connecting To Mongo"); 
    await dbConnect()
    console.log("Connected To Mongo"); 

    const result = await Wallet.find({address})

    // if(result){
    // console.log(result);
    // res.json(result)
    // console.log(req.body);
    // }
    // else  {
    //   const newUser = await new Wallet(address)
    //   await newUser.save();
    //   console.log(newUser);
    //   res.status(200).json(newUser);
    // }
   
    if(result==['']){
      const newUser = await new Wallet(address)
      await newUser.save();
      console.log(newUser);
      res.status(200).json(newUser);
    }
    else  {
      console.log(result);
      res.json(result)
      console.log(req.body);
     
    }
   
    // else
    // console.log('Creating New User');
    // const test = await Todo.create(wallet);
    // console.log('Created User');
    
    // res.json(test)
    // res.json(wallet)

    }
    catch (err : any){
      console.log(err);
      res.status(400).json(err)
    }
}

// export  async function Update(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     const {id} = req.body;
//     const updateTodo = await Wallet.findByIdAndUpdate( id, req.body);

//   }
//   catch(error:any){
//     res.status(400).json({error:error.message})
//     console.log(error);
//   }
// }


// export async function Delete(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
// try {
//   const { method } = req;
//  const { id } = req.body;
//    const deleteUser = await Wallet.findByIdAndDelete( id,req.body);

// }
// catch(error:any){
//   console.log(error);
//   res.status(400).json(error)
// }

  
// }

// export  async function add(req: { method: string }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { name?: string; Status?: string }): void; new(): any } } }) {
//   if (req.method === 'GET') {
    
//     const result = await new Todo();
//     res.status(200).json(result)
//     // Process a POST request
//   } else {
//     res.status(404).json({Status: 'Sorry Not Found'})
//     // Handle any other HTTP method

//   }
// };


