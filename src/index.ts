import express, { Request, Response, Application } from "express";
import cors from "cors";
import auth from "./config/auth";
import connectDB from "./database/db";

const app = express();
app.use(express.json());
app.use(cors());

connectDB()
  .then(() =>
    console.log(
      "connected on db ",
      app.listen(auth.port || 3333, () => {
        console.log(`Server is Fire at http://localhost:${auth.port}`);
      })
    )
  )
  .catch((err) => console.log(`Error: ${err}, message: ${err.message}`));
