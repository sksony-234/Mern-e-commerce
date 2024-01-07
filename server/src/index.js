const express = require('express');
const cors = require('cors');
const authRouters = require('./routers/authRoute.js');
const userRouters = require('./routers/userRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).send("Hell, It work from index page")
});

// middleware
app.use('/auth', authRouters);
app.use('/api/user', userRouters);

module.exports=app;