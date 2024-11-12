import { Type } from "./enumerations/type.enum";

export  interface Education {
    id: number;
    startDate: string;
    endDate: string;
    school: string;
    diploma: string;
}

export const educationList: Education[] = [
    {
        id: 1,
        startDate: "2019",
        endDate: "2021",
        school: "Université Paris-Saclay",
        diploma: "Master en Informatique"
    },
    {
        id: 2,
        startDate: "2016",
        endDate: "2019",
        school: "IUT de Villetaneuse",
        diploma: "Licence Informatique"
    },
    {
        id: 3,
        startDate: "2014",
        endDate: "2016",
        school: "Lycée Louis Armand",
        diploma: "BTS Systèmes Numériques"
    },
    {
        id: 4,
        startDate: "2013",
        endDate: "2014",
        school: "Lycée Gustave Eiffel",
        diploma: "Bac STI2D"
    }
];
