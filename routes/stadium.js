import { Router } from "express";
import isAuthorized from "../middlewares/auth.js";
import stadiumController from "../controllers/stadiumController.js";
const router = Router();

router.get("/", (req, res) => {
    stadiumController.getAll(req,res);
    //res.send("mostrar todos los estadios");
});

router.get("/:id", (req, res) => {
    stadiumController.getAll(req,res);
    //res.send("mostrar un estadio con id " + req.params.id);
});
router.post("/",isAuthorized, (req, res) => {
    stadiumController.getAll(req,res);
    //res.send("crea un nuevo estadio");
});

router.put("/:id", isAuthorized,(req, res) => {
    stadiumController.getAll(req,res);
    //res.send("editar un estadio con id " + req.params.id);
});

router.delete("/:id", isAuthorized,(req, res) => {
    stadiumController.getAll(req,res);
    //res.send("borrar un estadio con id " + req.params.id);
});

export default router;