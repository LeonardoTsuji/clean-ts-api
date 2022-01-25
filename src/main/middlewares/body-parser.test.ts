import request from 'supertest'
import app from '../config/app'

describe('Body Parser Middleware', () => {
  test('Should parse body as json', async () => {
    const route = '/test_body_parser'
    app.post(route, (req, res) => {
      res.send(req.body)
    })
    await request(app).post(route).send({
      name: 'Leonardo'
    }).expect({
      name: 'Leonardo'
    })
  })
})
