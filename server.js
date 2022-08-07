const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const router = require('./routes/stores');
const conectDB = require('./config/db');
const connectDB = require('./config/db');


dotenv.config({ path: './config/config.env' })

connectDB();

const app = express()
app.use(express.json())

app.use(cors())

//set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/v1/stores', router)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`))