const {registerUser, loginUser} = require('../service/user-service');


class UserController {
  register = async (req, res) => {
    const { username, password } = req.body;
    const token  = await registerUser({username, password});
    res.json({token})
  };
  login = async (req,res, next)=> {
    const { username, password } = req.body;
    try {
        const token = await loginUser({username,password})
        res.json({token});
    } catch (error) {
        next(error);
    }
  }
}

module.exports = new UserController();
