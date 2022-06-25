// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { CERTIFICATIONS } from "../../data/certifications";


type Entry = {
  id: number,
  type: string,
  year: number,
  title: string,
  url: string,
  courses: string[]
}



type Data = Entry[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(CERTIFICATIONS)
}
