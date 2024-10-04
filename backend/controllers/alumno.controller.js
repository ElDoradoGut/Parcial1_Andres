import { modeloAlumnos } from "../models/alumno.model.js";

modeloAlumnos.create({
    name: "Andrés",
    apepat: "Dorado",
    apemat: "Gutiérrez",
    edad: 31
})

modeloAlumnos.create({
    name: "Pedro",
    apepat: "Pedroso",
    apemat: "Perrón",
    edad: 25
})

modeloAlumnos.create({
    name: "Tony",
    apepat: "Tigre",
    apemat: "Tigre",
    edad: 23
})

modeloAlumnos.create({
    name: "Tim",
    apepat: "Marín",
    apemat: "Dopingüe",
    edad: 29
})

modeloAlumnos.create({
    name: "Solferino",
    apepat: "Picudo",
    apemat: "Picudo",
    edad: 22
})

export const test=()=>{
    console.log("Se esta mandando llamar correctamente el controlador.")
}