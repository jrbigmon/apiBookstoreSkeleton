const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const AuthController = {
    store: async (req, res) => {
        try {
            const {name, email, password} = req.body;

            const hash = bcrypt.hashSync(password, 10);

            const user  = {name, email, password: hash}

            await User.create(user);

            return res.status(201).json(user);
            
        } catch(err) {
            if(err.name == "SequelizeUniqueConstraintError"){
                new Error(err.message = "Email already exists");
        
                return res.status(400).json(err.message);
            }
            new Error(err.message = "Server went out for coffee!");
        
            return res.status(500).json(err.message);
        }
    },

    login: async (req, res) => {
        try {
            const {email, password} = req.body;

            const user = await User.findOne({ where: { email }});

            if(email && bcrypt.compareSync(password, user.password)) {
                const token = jwt.sign(
                    {
                        id: user.id,
                        email: user.email, 
                    },
                    process.env.JWT_KEY,
                    { 
                        expiresIn: '1h'
                    }
                )
                return res.status(200).json({message: "Autenticated Successfully", token});
            }
        
            return res.status(400).json('User not found!')

        } catch(err) {
            new Error(err.message = "Server went out for coffee!");
        
            return res.status(500).json(err.message);
        }
    }
}

module.exports = AuthController;