import { Router } from "express";
import isAuthorized from "../../middlewares/auth.js";
import tournamentController from "../../controllers/tournament/tournamentAPIController.js";

const router = Router();

router.get("/", (req, res) => {
    tournamentController.getAll(req,res);
    //res.send("mostrar todos los torneos");
});

router.get("/:id", (req, res) => {
    tournamentController.getAll(req,res);
    //res.send("mostrar un torneo con id " + req.params.id);
});
router.post("/", isAuthorized,(req, res) => {
    tournamentController.getAll(req,res);
    //res.send("crea un nuevo torneo");
});

router.put("/:id", isAuthorized,(req, res) => {
    tournamentController.getAll(req,res);
    //res.send("editar un torneo con id " + req.params.id);
});

router.delete("/:id", isAuthorized,(req, res) => {
    tournamentController.getAll(req,res);
    //res.send("borrar un torneo con id " + req.params.id);
});

export default router;