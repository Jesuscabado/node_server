import { Router } from "express";
import {isAuthorized} from "../../middlewares/auth.js";
import teamController from "../../controllers/team/teamViewController.js";
const router = Router();

router.get("/", (req, res) => {
    teamController.getAll(req,res);
    //res.send("mostrar todos los equipos");
});

router.get("/team/:id", (req, res) => {
    teamController.getById(req,res);
    //res.send("mostrar un equipo con id " + req.params.id);
});

router.get("/new", (req,res) => {
    teamController.createForm(req,res);
});
router.post("/", isAuthorized, (req, res) => {
    teamController.create(req,res);
    //res.send("crea un nuevo equipo);
});

router.put("/team/:id", isAuthorized, (req, res) => {
    teamController.update(req,res);
   //res.send("editar un equipo con id " + req.params.id);
});

router.delete("/team/:id", isAuthorized,(req, res) => {
    teamController.borrar(req,res);
    //res.send("borrar un equipo con id " + req.params.id);
});

export default router;