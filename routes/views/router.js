import { Router } from "express";
import playerRouter from "./player.js";
/* import gameRouter from "./game.js";
import estadioRouter from "./stadium.js";
import equipoRouter from "./team.js";
import torneoRouter from "./tournament.js"; */
const router = Router();

router.use("/players", playerRouter);
/* router.use("/games", gameRouter); 
router.use("/stadiums", estadioRouter);
router.use("/teams", equipoRouter);
router.use("/tournament", torneoRouter); */


export default router;
