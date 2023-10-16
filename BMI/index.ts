import  Express, {Application, Request,Response} from "express";
import cors from "cors"

const port:number = 2030;
const app:Application = Express()

app.use(Express.json())
app.use(cors())

const sever = app.listen(port, ()=>{
    console.log("server is now live on port", port);
    
})
process.on("uncaughtException", (error) => {
    console.log("uncaughtException", error);
    process.exit(1);
  });
  process.on("unhandledRejection", (reason) => {
    console.log("uncaughtException", reason);
    sever.close(() => {
      process.exit(1);
    });
  });
  
