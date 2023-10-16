import { Router } from 'express'
const router = Router()

import { controller } from '../controllers/weather-controller.js'

// app routes
router.get('/', (req, res) => {
  res.status(200).send('Backend funcionando')
})
router.get('/weather?', controller.getWeather)

export default router
