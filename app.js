import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { Primer_Parcial } from "./backend/controllers/alumno.controller.js";
dotenv.config()

mongoose.connect(process.env.urlbase)
.then(()=>{
    console.log("Funciona la BD")
})
.catch((error)=>{
    console.log("No funciona la BD")
})

const app=express();
app.use(cors());

app.listen(4000,()=>{
    console.log("Se escucha correctamente el servidor.");
})

Primer_Parcial();