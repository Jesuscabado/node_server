import { Router } from "express";
import playerRouter from "./player.js";
import equipoRouter from "./team.js";
/* import gameRouter from "./game.js";
import estadioRouter from "./stadium.js";
import torneoRouter from "./tournament.js"; */
import userRouter from "./user.js";
const router = Router();

router.use("/players", playerRouter);
router.use("/teams", equipoRouter);
/* router.use("/games", gameRouter);
router.use("/stadiums", estadioRouter);
router.use("/tournament", torneoRouter); */
router.use("/users", userRouter);
export default router;
 