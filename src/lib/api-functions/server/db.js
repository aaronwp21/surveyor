import mongoose from "mongoose";

const { DB_URL = "mongodb://127.0.0.1:27017/surveyor" } = process.env;

console.log(DB_URL)

main().catch((err) => logger.error(err));

async function main() {
  try {
    await mongoose.connect(DB_URL);
  } catch (err) {
    console.error(err);
  }
}