import sha1 from 'js-sha1'
import { NextApiRequest, NextApiResponse } from 'next'

export default function wechat_verify(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const signature = req.query.signature as string
  const timestamp = req.query.timestamp as string
  const nonce = req.query.nonce as string
  const echostr = req.query.echostr as string

  const token = 'YOUR_TOKEN_HERE'
  const tmpArr = [token, timestamp, nonce]
  tmpArr.sort()
  const tmpStr = tmpArr.join('')
  const hashedTmpStr = sha1(tmpStr)

  if (hashedTmpStr === signature) {
    res.status(200).send(echostr)
  } else {
    res.status(403).send('Forbidden')
  }
}
