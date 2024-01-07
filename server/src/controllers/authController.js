const userService = require('../servieces/userService');
const jwtProvider = require('../config/jwtProvider');
const cartService = require('../servieces/cartService');
const bcrypt = require('bcrypt');

const register = async(req, res) => {
    try {
        const user = await userService.createUser(req.body);
        const jwt = jwtProvider.generateToken(user._id);

        await cartService.createCart(user);
        return res.status(200).json({
            message:'register success',
            user,
            jwt
        });

    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
};

const login = async(req, res) => {
    const {password, email} = req.body
    try {
        const user = await userService.getUserByEmail(email);

        if(!user){
            return res.status(404).send(`user not found with give email  ${email}`);
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log(user.password, " ", password, isPasswordValid)

        if(!isPasswordValid){
            return res.status(401).json({message: 'Invalid password'})
        }

        const jwt = jwtProvider.generateToken(user._id);
        return res.status(200).json({message: 'login sucess', user, jwt});

    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

module.exports = {register, login};

