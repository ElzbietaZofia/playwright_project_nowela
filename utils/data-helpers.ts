import * as crypto from "crypto";

export async function getRandomString() {
  return crypto.randomBytes(5).toString("hex");
}