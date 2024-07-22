const handler = async (req, res) => {
  const body = `
Contact: mailto:security@blitzjs.com
Expires: ${new Date().toISOString()}
Policy: https://blitzjs.com/security
`

  res.send(body.trim())
}

export default handler
