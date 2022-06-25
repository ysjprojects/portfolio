// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { AWARDS } from "../../data/awards";

type Entry = {
  id: number,
  name: string,
  prize: string,
  year: number,
  descHTML: string,
  thumbnail: string,
  imgs: string[]
}

type Data = Entry[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(AWARDS)
}
