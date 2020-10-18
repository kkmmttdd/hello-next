import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
    console.log(req.body.hoge, req.query);
    return res.json({hoge: "hgoehgoegje"})
}
