import mongo from "../db/db.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

const db = await mongo();

const signUp = async (req, res) => {
  const passwordHash = bcrypt.hashSync(req.body.password, 10);
  const token = uuid();

  try {
    await db.collection("users").insertOne({
      name: req.body.name,
      email: req.body.email,
      password: passwordHash,
    });
    db.collection("sessions").insertOne({
      email: req.body.email,
      token,
    });
    res.status(201).send(token);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

const login = async (req, res) => {
  try {
    const token = uuid();

    await db.collection("sessions").insertOne({
      email: req.body.email,
      token,
    });
    res.status(200).send(token);
  } catch (error) {
    res.sendStatus(400);
  }
};

async function getUser() {
  const findUser = await db.collection("users").findOne();
  return findUser;
}

async function getSession() {
  const currentSession = await db.collection("sessions").findOne();
  return currentSession;
}

const userAddress = async (req, res) => {
  try {
    const user = await getUser();
    return res.send(user.adress);
  } catch (error) {
    res.send(404);
  }
};
const userName = async (req, res) => {
  try {
    const user = await getUser();
    return res.send(user.name);
  } catch (error) {
    res.send(404);
  }
};

const logout = async(req, res) =>{
  try {
    const clearSession = await db.collection("sessions").deleteMany({});
    return res.sendStatus(200);
  } catch (error) {
    console.log(error)
    res.send(400);
  }

}

export { signUp, login, getUser, getSession, userAddress , userName , logout  };
