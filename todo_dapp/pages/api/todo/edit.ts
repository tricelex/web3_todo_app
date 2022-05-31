import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from "../../../lib/dbConnect";

import { Wallet } from '../../../models/appDb';

import { Todo } from '../../../models/appDb';

export default async function Update(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {id, title, description } = req.body;
    let vvv = {
        title,
        description
    }
    await dbConnect();
    const updateTodo = await Todo.findByIdAndUpdate( id, vvv);
    console.log(req.body);
    console.log(updateTodo);
    res.status(200).json(updateTodo);

  }
  catch(error:any){
    res.status(400).json({error:error.message})
    console.log(error);
  }
}