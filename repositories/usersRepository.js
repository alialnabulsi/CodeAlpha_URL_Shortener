const {User, sequelize} = require('../models/associations');

class UserRepository{
    //handle errors and return appropriate messages
    static async handleError(message,statusCode) {
        const error = new Error(message);
        error.status = statusCode;
        return error;
    }
    //create user

    static async createUser({email, username, password, firstName, lastName}) {
        //check if user exists by email or username
        const userExists = await this.userExists(username);
        if (userExists) {
            return await this.handleError('User already exists', 409);
        }
        const emailExists = await this.emailExists(email);
        if (emailExists) {
            return await this.handleError('Email already exists', 409);
        }
        try {
            const user = await User.create({
                email,
                username,
                password,
                firstName,
                lastName
            });
            return user;
        } catch (e) {
            throw new Error(e);
        }
        
    }
    
    //check if user exists by email or username
    static async userExists(username) {
        try {
            const user = await User.findOne({
                where: { username },
                attributes: ['user_id'] 
            });
            
            return !!user; 
        } catch (e) {
            throw new Error(e.message);
        }
    }
    static async emailExists(email) {
        try {
            const user = await User.findOne({
                where: { email },
                attributes: ['user_id'] 
            });
            
            return !!user; 
        } catch (e) {
            throw new Error(e.message);
        }
    }
}

module.exports = UserRepository;