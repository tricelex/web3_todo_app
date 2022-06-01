import dbConnect from '../../../lib/dbConnect';
import { Todo } from '../../../models/appDb';


export default async function handler(req: { query: { pid: any; }; }, res: { end: (arg0: string) => void; }) {
    const { pid } = req.query
    res.end(`Post: ${pid}`)
  }

  
 