import User from "../../models/user.js";
import bcrypt from "bcrypt";

const getAll = async (req,res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message:error.message});
    }
}

const create = async(req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        let data ={
            username : req.body.username.toLowerCase(),
            password : hashedPassword,
            email : req.body.email,
            role : req.body.role
            }
        let user = await User.create(data);
        res.send(user);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error ocurred while creating user."
        });
    }
    
}

const login = async (req, res) => {
    const username = req.body.username.toLowerCase();
    let user = await User. findOne({username:username});
    if (!user) {
        res.status(404).send("Este usuario no esta registrado");
        return;
    }
    let password = req.body.password;
    if (await bcrypt.compare(password, user.password)){
        res.send("Usuario y contraseña validos");
    }
    else{
        res.status(401).send("Contraseña incorrecta");
    }
}

const loginForm = (req, res) => {
    res.render("user/login");

}

export default { getAll,login,loginForm, create}; 