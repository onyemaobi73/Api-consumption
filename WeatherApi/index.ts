import express, { Application } from "express";
import cors from "cors";
import Weather from "./Router/weatherRouter";

const app: Application = express();
app.use(express.json()).use(cors()).use("api/weather", Weather);

const port: number = 3040;
const server = app.listen(port, () => {
  console.log("server is ready on", port);
});
process.on("uncaughtException", (error) => {
  console.log("uncaughtException", error);
  process.exit(1);
});
process.on("unhandledRejection", (reason) => {
  console.log("uncaughtException", reason);
  server.close(() => {
    process.exit(1);
  });
});
