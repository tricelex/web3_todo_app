// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../lib/dbConnect';
import { Todo, Wallet } from '../../../models/appDb';

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'Ebuka Okoye' })
// }


export default async function handler(req: { method: string }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { name?: string; Status?: string }): void; new(): any } } }) {
  if (req.method === 'GET') {
    
    const result = await new Wallet();
    res.status(200).json(result)
    // Process a POST request
  } else {
    res.status(404).json({Status: 'Sorry Not Found'})
    // Handle any other HTTP method

  }
};


