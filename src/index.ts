import express, { Request, Response , Application } from 'express';
import cors from 'cors';
import auth from "./config/auth";
import WebToken from './middlewares/jwt-token';

const user = {
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com",
  permissions: ["admin"],
};

const app: Application = express();
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

// Exemplo de uso:
if (auth.secret_key) {
  const webToken = new WebToken(auth.secret_key);
  const token = webToken.signToken(user); // Gera o token
  const decodedPayload = webToken.decoded(token); // Decodifica o token
  console.log("Token:", token);
  console.log("Payload Decodificado:", decodedPayload);
}

app.listen(auth.port || 3333, () => {
  console.log(`Server is Fire at http://localhost:${auth.port}`);
});