const jwt = require('jsonwebtoken');

const expirationTimeInSeconds = 30 * 24 * 60 * 60; // 30 days in seconds
const expirationDate = Math.floor(Date.now() / 1000) + expirationTimeInSeconds;

const generateToken=(userId)=>{
    const token = jwt.sign({userId}, process.env.SECRET_KEY, {expiresIn:'48h'});
    // const token = jwt.sign({ userId, exp: expirationDate }, process.env.SECRET_KEY);
    return token;
};

const getUserIdFromToken = (token)=>{
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    return decodedToken.userId;
}

module.exports = {generateToken, getUserIdFromToken};