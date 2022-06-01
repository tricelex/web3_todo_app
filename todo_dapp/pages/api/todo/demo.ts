// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import {Todo} from '../../../models/appDb';
// import {Wallet} from '../../../models/appDb';


type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
  const { title, description} = req.body;
  console.log("Connecting To Mongo"); 
  await dbConnect()
  console.log("Connected To Mongo"); 


  console.log('Creating Document');
  const test = await Todo.create(req.body);
  console.log('Created Doc');

  res.json(test)
  }
  catch (err : any){

    console.log(err);
    res.json(err)
  }
}
