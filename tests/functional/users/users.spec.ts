import test from 'japa'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('User', () => {
  test.only('it should create an user', async () => {
    const userPayload = {
      email: 'wander.alves@outlook.com.br',
      userName: 'test',
      password: 'teste',
    }

    await supertest(BASE_URL).post('/users').send(userPayload)
  })
})
