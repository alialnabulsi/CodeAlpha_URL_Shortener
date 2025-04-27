const UsersService = require('../services/usersService');

class UserController{

    async registerUser(req, res) {
        try {
            const {email, username, password,firstName,lastName} = req.body;
            const user = await UsersService.registerUser({
                email,
                username,
                password,
                firstName,
                lastName
            });
            res.status(201).json(user);
        } catch (e) {
            if (e.statusCode === 409) {
                res.status(e.statusCode).json({ message: 'User already exists', error: e.message });
            }else {
                res.status(500).json({ message: 'Internal server error', error: e.message });
            }
        }
    }

    async loginUser(req, res) {
        try {
            const token = await UsersService.loginUser(req.body);
            res.status(200).json({ token });
        } catch (e) {
            res.status(401).json({ error: e.message });
        }
    }

    async logoutUser(req, res) {
        try {
            await UsersService.logoutUser(req.user.id);
            res.status(200).json({ message: 'Logged out successfully' });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    async verifyEmail(req, res) {
        try {
            await UsersService.verifyEmail(req.body.token);
            res.status(200).json({ message: 'Email verified successfully' });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }

    async verifyPhone(req, res) {
        try {
            await UsersService.verifyPhone(req.user.id);
            res.status(200).json({ message: 'Phone verified successfully' });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }
    async forgotPassword(req, res) {
        try {
            await UsersService.forgotPassword(req.body.email);
            res.status(200).json({ message: 'Password reset link sent' });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }
}

module.exports = UserController;