import  Express, {Router}  from "express";
import { getWeatherAPI, viewStateWeatherAPI } from "../Controller/WeatherApiController";

const router:Router = Express.Router()

router.route("/").get(getWeatherAPI)
router.route("/state").post(viewStateWeatherAPI)

export default router