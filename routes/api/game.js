import { Router } from "express";
import {isAuthorized} from "../../middlewares/auth.js";
import gameController from "../../controllers/game/gameAPIController.js";
const router = Router();

router.get("/", (req, res) => {
    gameController.getAll(req,res);
    //res.send("mostrar todos los partidos");
});

router.get("/:id", (req, res) => {
    gameController.getById(req,res); 
    //res.send("mostrar un partido con id " + req.params.id);  
});

router.post("/", isAuthorized, (req, res) => {
    gameController.create(req,res);
    //res.send("crea un nuevo partido");
});

router.put("/:id", isAuthorized, (req, res) => {
    gameController.update(req,res);
    //res.send("editar un partido con id " + req.params.id);
});

router.delete("/:id", isAuthorized,(req, res) => {
    gameController.borrar(req,res);
    //res.send("borrar un partido con id " + req.params.id);
});

export default router;