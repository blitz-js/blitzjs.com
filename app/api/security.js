const handler = async (req, res) => {
  const body = `
Contact: mailto:security@blitzjs.com
Expires: ${new Date().toISOString()}
Encryption: https://blitzjs.com/pgp-key.txt
Policy: https://blitzjs.com/security
`

  res.send(body.trim())
}

export default handler
