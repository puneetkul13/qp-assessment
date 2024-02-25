const userService = require("../services/user")
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try {
        const {username, password} = req.body
        const user = (await userService.getUser(username, password))
        if (!user) {
            return res.status(401).json({ message: 'Invalid username' });
        }
        const token = jwt.sign({ id: user._id, username: user.username }, "JWT_SECRET", { expiresIn: '1h' });
        res.json({ token });

    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}