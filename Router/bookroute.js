import express from 'express'
import authMiddleware from '../Middleware/auth.js'
import { createBook, getBookDetails, getBooks } from '../Controller/bookcontroller.js'


const bookroute= express.Router()


 bookroute.post('/books',authMiddleware,createBook)
 bookroute.get('/books', authMiddleware, getBooks)
 bookroute.post('/books/:id',authMiddleware,getBookDetails)

 export default  bookroute;