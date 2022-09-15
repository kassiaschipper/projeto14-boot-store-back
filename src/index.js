import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import userRouters from "./routers/userRouters.js";
import productstRoute from "./routers/productsRoute.js";

dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());

server.use(userRouters);
server.use(productstRoute);

server.get("/status", (req, res) => {
  return res.send("Ok");
})  

server.listen(5000, () =>
  console.log(`Listening on port ${process.env.PORT_API}`)
);
