// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { SOCIALS } from "../../data/socials";


type Entry = {
  id: number,
  name: string,
  url: string
}

type Data = Entry[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(SOCIALS)
}
