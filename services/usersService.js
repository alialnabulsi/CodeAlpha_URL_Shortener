const UsersRepository = require('../repositories/usersRepository');

class UsersService {
    static async registerUser({ email, username, password, firstName, lastName }) {
        try {
            return await UsersRepository.createUser({
                email,
                username,
                password,
                firstName,
                lastName
            });
        } catch (e) {
            throw new Error(e);
        }
        
    }

}

module.exports = UsersService;