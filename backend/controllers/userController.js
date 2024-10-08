const userService = require('../services/userService');

// Controller function for user signup
exports.signup = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    const token = await userService.signup(firstname, lastname, email, password);
    res.status(201).json({ message: 'User created', token });
    //res.send(token);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Controller function for user login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await userService.login(email, password);
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(401).json({ message: 'Invalid credentials', error: error.message });
  }
};
