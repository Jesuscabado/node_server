const isAuthorized = (req, res, next) => {
    const password = req.body.password;
    if (password === "mi-contraseña") {
        next();
    }
    else{
        res.send("you shall not pass");
    }
}

export default isAuthorized;