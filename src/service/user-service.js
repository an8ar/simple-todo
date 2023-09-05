const { User } = require("../entity/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const generateJWT = (id, username) => {
    return jwt.sign({ id, username }, process.env.SECRET_KEY, { expiresIn: "24h" });
};
const registerUser = async ({username, password}) => {
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({username,password: hashPassword});
    const token = generateJWT(user.id, username);
    return token;

};
const loginUser = async ({username, password}) => {
    const user = await User.findOne({where: {username}});
    const correctPassword = bcrypt.compareSync(password, user.password);
    if(!correctPassword){
        return new Error({message: 'Incorrect Pawword'})
    }
    const token = generateJWT(user.id, username);
    return token;

};

module.exports = { registerUser, loginUser };
