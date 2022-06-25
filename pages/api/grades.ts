// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { GRADES } from "../../data/grades";


type Subject = {
  id: number,
  depth: string,
  name: string,
  grade: string
}

type Data = {
  alevels: {
    score: number,
    subjects: Subject[]
  }

}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(GRADES)
}
