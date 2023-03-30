import { Router } from "express";
import isAuthorized from "../../middlewares/auth.js";
import playerController from "../../controllers/player/playerViewController.js";
const router = Router();

router.get("/", (req, res) => {
    playerController.getAll(req,res);
    //res.send("mostrar todos los jugadores");
});

router.get("/player/:id", (req, res) => {
    playerController.getById(req,res);
    //res.send("mostrar un jugador con id " + req.params.id);
});

router.get("/new", (req,res) => {
    playerController.createForm(req,res);
});
router.post("/", isAuthorized, (req, res) => {
    playerController.create(req,res);
    //res.send("crea un nuevo jugador");
});

router.put("/player/update:id", isAuthorized, (req, res) => {
    playerController.update(req,res);
   //res.send("editar un jugador con id " + req.params.id);
});

router.post("/player/delete:id", isAuthorized,(req, res) => {
    playerController.borrar(req,res);
    //res.send("borrar un jugador con id " + req.params.id);
});

export default router;