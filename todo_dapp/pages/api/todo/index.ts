// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'Ebuka Okoye' })
// }


export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ name: 'Ebuka Okoye' })
    // Process a POST request
  } else {
    res.status(404).json({Status: 'Sorry Not Found'})
    // Handle any other HTTP method

  }
}