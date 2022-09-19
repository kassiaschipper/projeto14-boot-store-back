import mongo from "../db/db.js";
import { getUser } from "./userControllers.js";

const db = await mongo();

async function getProducts(req, res) {
  try {
    const chartProducts = await db.collection("products").find().toArray();
    const user = await getUser();

    if (!user) {
      return res.status(404);
    }
    res.locals.user = user;
    return res.send(chartProducts);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}

async function postProduct(req, res) {
  try {
    const product = req.body;

    await db.collection("products").insertOne(product);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
}

export { getProducts, postProduct };
