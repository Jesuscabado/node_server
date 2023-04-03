import express from "express";
import routerAPI from "./routes/api/router.js";
import routerView from "./routes/views/router.js";
import express_session from "express-session";
import passport from "./config/passport.js";

const app = express();

app.use(express.static("public"));// para que el servidor pueda acceder a los archivos estaticos
app.use(express_session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize()); // inicializa passport
app.use(passport.session()); // inicializa la sesion de passport para que utilice la sesion de express

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');  


app.use("/api/", routerAPI);
app.use("/", routerView);
app.listen(3000, () => {
    console.log("server is running on port 3000");
});