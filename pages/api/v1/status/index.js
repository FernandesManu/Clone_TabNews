import { DatabaseError } from "pg";
import database from "../../../../infra/database.js";

async function status(req, res) {
  const result = await database.query();
  res.status(200).json({ message: "curso.dev" });
}

export default status;
