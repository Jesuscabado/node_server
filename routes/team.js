import { Router } from "express";
import isAuthorized from "../middlewares/auth.js";
const router = Router();

router.get("/", (req, res) => {
    res.send("mostrar todos los equipos");
});

router.get("/:id", (req, res) => {
    res.send("mostrar un equipo con id " + req.params.id);
});
router.post("/", isAuthorized,(req, res) => {
    res.send("crea un nuevo equipo");
});

router.put("/:id", isAuthorized,(req, res) => {
    res.send("editar un equipo con id " + req.params.id);
});

router.delete("/:id", isAuthorized,(req, res) => {
    res.send("borrar un equipo con id " + req.params.id);
});

export default router;