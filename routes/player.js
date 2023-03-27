import { Router } from "express";
import isAuthorized from "../middlewares/auth.js";
import playerController from "../controllers/playerController.js";
const router = Router();

router.get("/", (req, res) => {
    playerController.getAll(req,res);
    //res.send("mostrar todos los jugadores");
});

router.get("/:id", (req, res) => {
    playerController.getById(req,res);
    //res.send("mostrar un jugador con id " + req.params.id);
});
router.post("/", isAuthorized, (req, res) => {
    playerController.create(req,res);
    //res.send("crea un nuevo jugador");
});

router.put("/:id", isAuthorized, (req, res) => {
    playerController.update(req,res);
   //res.send("editar un jugador con id " + req.params.id);
});

router.delete("/:id", isAuthorized,(req, res) => {
    playerController.borrar(req,res);
    //res.send("borrar un jugador con id " + req.params.id);
});

export default router;