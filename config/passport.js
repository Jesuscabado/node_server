import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/user.js";

const localStrategy = new LocalStrategy({ // crea una nueva estrategia de autenticacion local
    usernameField: "username", // el campo que se va a usar para el username
    passwordField: "password", // el campo que se va a usar para el password
    session: true // se va a guardar la sesion en la cookie

}, async (username, password, done) => { // funcion que se va a ejecutar cuando se autentique
    const user = await User.findOne({ username: username.toLowerCase() }); // busca el usuario en la base de datos
    if (!user) { return done(null, false); } // si el usuario no existe, se devuelve un error
    if (!user.verifyPassword(password)) { return done(null, false,); } // si el usuario no existe o la contraseña es incorrecta, se devuelve un error
    passport.serializeUser(user, (err, serializedUser) => { // se guarda el usuario en la sesion    
        return done(err, serializedUser);
   });
});

passport.serializeUser(function(user, cb) { // se guarda el usuario en la sesion
    process.nextTick(function() { // se usa nextTick para que se ejecute despues de que se guarde el usuario en la sesion
        cb(null, { id: user.id, username: user.username, role: user.role }); // se guarda el id, el username y el role del usuario
    });
});

passport.deserializeUser(function(user, cb) { // se recupera el usuario de la sesion
    process.nextTick(function() { // se usa nextTick para que se ejecute despues de que se recupere el usuario de la sesion
        return cb (null, user); // se devuelve el usuario
    });
});

passport.use(localStrategy); // añadimos la estrategia de autenticacion local

export default passport; // exportamos el modulo passport