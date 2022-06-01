import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from "../../../lib/dbConnect";

import { Todo } from '../../../models/appDb';


export default  async function New(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log("Connecting To Mongo"); 
    await dbConnect()
    console.log("Connected To Mongo"); 

    const newTodo = await new Todo(req.body);
    res.status(200).json(newTodo);
    console.log(newTodo);
    newTodo.save();

  }
  catch(error:any){
    res.status(400).json({error:error.message})
    console.log(error);
  }
}
