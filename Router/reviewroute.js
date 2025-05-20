import express from 'express'
import authMiddleware from '../Middleware/auth.js'
import { createReview, deleteReview, updateReview } from '../Controller/reviewcontroller.js'

const reviewroute= express.Router()


reviewroute.post('/books/:id/reviews', authMiddleware,createReview)
reviewroute.put('/reviews/:id',authMiddleware, updateReview)
reviewroute.delete('/reviews/:id',authMiddleware,deleteReview)

export default reviewroute;