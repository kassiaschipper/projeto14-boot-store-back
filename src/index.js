import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import userRouters from "./routers/userRouters.js";

dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());

server.use(userRouters);

server.listen(5000, () =>
  console.log(`Listening on port ${process.env.PORT_API}`)
);
