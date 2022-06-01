import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from "../../../lib/dbConnect";

import { Wallet } from '../../../models/appDb';

import { Todo } from '../../../models/appDb';

export default async function Delete(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {id} = req.body;
    await dbConnect();
    const deleteTodo = await Todo.findByIdAndDelete(id);
    res.json(deleteTodo)

    console.log(deleteTodo);

  }
  catch(error:any){
    res.status(400).json({error:error.message})
    console.log(error);
  }
}