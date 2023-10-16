import Express, { Request, Response } from "express";
import axios from "axios";
import { promises } from "dns";


let url = `http://api.weatherapi.com/v1/current.json?key= 
4ac98d9b959445cb9e3222509230606&q=London&aqi=no`;

export const getWeatherAPI = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const weatherAPi = await axios.get(url).then((res: any) => {
      return res.data.data;
    });
    return res.status(200).json({ message: "Weather Api fetched", weatherAPi });
  } catch (error) {
    return res.status(404).json({ message: "Can't fetch data", error });
  }
};


export const viewStateWeatherAPI = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {state}= req.body;
    let weatherAPi = await axios.post(`http://api.weatherapi.com/v1/current.json?key= 
    4ac98d9b959445cb9e3222509230606&q=${state}&aqi=no`).then((res: any) => {
      return res.data
    });
    return res.status(201).json({ message: "Weather Api fetched", weatherAPi });
  } catch (error) {
    return res.status(404).json({ message: "Can't fetch data"});
  }
};
