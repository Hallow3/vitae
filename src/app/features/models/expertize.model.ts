import { Type } from "./enumerations/type.enum";

export interface Expertize {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    compagny: string;
    type: Type;
    description: string;
}

export const expertizeList: Expertize[] = [
    {
        id: 1,
        name: "Développeur Full Stack",
        startDate: "2020-01-01",
        endDate: "2021-06-30",
        compagny: "Tech Solutions Inc",
        type: Type.CDI,
        description: "Conception et développement d'applications web complexes utilisant Angular et Node.js. Mise en place d'architectures scalables et implémentation de fonctionnalités avancées"
    },
    {
        id: 2,
        name: "Développeur Full Stack",
        startDate: "2018-09-01",
        endDate: "2019-12-31",
        compagny: "Digital Innovations",
        type: Type.ACADEMY,
        description: "Stage professionnel en développement full-stack avec participation active aux projets clients. Utilisation des méthodologies agiles et des bonnes pratiques de développement"
    },
    {
        id: 3,
        name: "Développeur Full Stack",
        startDate: "2017-03-15",
        endDate: "2018-08-31",
        compagny: "Data Systems Corp",
        type: Type.REMOTE,
        description: "Conception et implémentation d'un système de gestion de base de données haute performance. Optimisation des requêtes et mise en place de processus d'automatisation"
    },
    {
        id: 4,
        name: "Développeur Full Stack",
        startDate: "2016-01-01",
        endDate: "2017-02-28",
        compagny: "Software Solutions Ltd",
        type: Type.CDD,
        description: "Modernisation et optimisation d'applications legacy critiques. Refactoring du code, amélioration des performances et mise en place de tests automatisés"
    }
];
