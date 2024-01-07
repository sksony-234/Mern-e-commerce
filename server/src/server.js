const app = require(".");
const dotenv = require("dotenv");
dotenv.config();
require("./config/database");

const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`Your server is running at http://localhost:${port}`)
})