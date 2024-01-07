const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log(`Database Connected Suceesfull`))
.catch((err)=>console.log(err));