import { Response, Router } from "express";
import { create } from "./controllers/UserController";
import passport from "passport";

const router = Router();

// rota para autenticação:
router.post("/login", create);

// rotas que precisam de autenticação:
router.get(
  "/protected",
  // Esse middleware verifica se o token JWT é válido e, se for, adiciona o objeto user ao objeto req.
  passport.authenticate("jwt", { session: false }),
  (req, res: Response) => {
    res.json({ message: "This is a protected route." });
  }
);
export default router;
