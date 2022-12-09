import express from 'express'

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())

app.get('/api', (req, res) => {
  const data = new Date()

  res.json({
    unix: data.getTime(),
    utc: data.toUTCString(),
  })
})

app.get('/api/:date', (req, res) => {
  const date = req.params.date || ''
  const dateObj = date.includes('-') ? new Date(date) : new Date(parseInt(date))

  if (dateObj.toString() === 'Invalid Date') {
    return res.json({
      error: 'Invalid Date',
    })
  }

  res.json({
    unix: dateObj.getTime(),
    utc: dateObj.toUTCString(),
  })
})

app.listen(PORT)
