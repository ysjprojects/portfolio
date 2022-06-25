// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { SKILLS } from "../../data/skills";


type Entry = {
  id: number
  name: string,
  type: string,
  startYear: number
}



type Data = Entry[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(SKILLS)
}
