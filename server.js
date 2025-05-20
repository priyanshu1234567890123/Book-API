
import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import route from './Router/route.js';
import connectdb from './Utils/db.js';
import bookroute from './Router/bookroute.js';
import reviewroute from './Router/reviewroute.js';


// main file server.js

dotenv.config()
connectdb()

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cookieParser());


app.use('/',route);
app.use('/api',bookroute)
app.use('/api',reviewroute)



app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);

  
});


