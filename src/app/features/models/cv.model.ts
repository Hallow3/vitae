import { Model } from "./enumerations/model.enum";
import { User, userList } from "./user.model";

export interface CV{
    id: number;
    name: string
    model: Model;
    template: String;
    owner: User;
}

export const cvList: CV[] = [
    {
        id: 1,
        name: "model simple",
        model: Model.SD,
        template: "../../../../assets/images/cv-basic.jpeg",
        owner: userList[0]
    },
    {
        id: 2,
        name: "model simple avec profil",
        model: Model.SP,
        template: "../../../../assets/images/cv-basic.jpeg",
        owner: userList[1]
    },
    {
        id: 3,
        name: "model simple",
        model: Model.SD,
        template: "../../../../assets/images/cv-basic.jpeg",
        owner: userList[0]
    },
    {
        id: 4,
        name: "model simple avec profil",
        model: Model.SP,
        template: "../../../../assets/images/cv-basic.jpeg",
        owner: userList[1]
    },
    {
        id: 5,
        name: "model simple",
        model: Model.SD,
        template: "../../../../assets/images/cv-basic.jpeg",
        owner: userList[0]
    },
    {
        id: 6,
        name: "model simple avec profil",
        model: Model.SP,
        template: "../../../../assets/images/cv-basic.jpeg",
        owner: userList[1]
    },
    {
        id: 7,
        name: "model simple",
        model: Model.SD,
        template: "../../../../assets/images/cv-basic.jpeg",
        owner: userList[0]
    },
    {
        id: 8,
        name: "model simple avec profil",
        model: Model.SP,
        template: "../../../../assets/images/cv-basic.jpeg",
        owner: userList[1]
    },
    {
        id: 9,
        name: "model simple",
        model: Model.SD,
        template: "../../../../assets/images/cv-basic.jpeg",
        owner: userList[0]
    },
    {
        id: 10,
        name: "model simple avec profil",
        model: Model.SP,
        template: "../../../../assets/images/cv-basic.jpeg",
        owner: userList[1]
    },

    {
        id: 11,
        name: "model simple",
        model: Model.SD,
        template: "../../../../assets/images/cv-basic.jpeg",
        owner: userList[0]
    },
    {
        id: 2,
        name: "model simple avec profil",
        model: Model.SP,
        template: "../../../../assets/images/cv-basic.jpeg",
        owner: userList[1]
    },
    {
        id: 3,
        name: "model simple",
        model: Model.SD,
        template: "../../../../assets/images/cv-basic.jpeg",
        owner: userList[0]
    },
    {
        id: 4,
        name: "model simple avec profil",
        model: Model.SP,
        template: "../../../../assets/images/cv-basic.jpeg",
        owner: userList[1]
    },
    {
        id: 15,
        name: "model simple",
        model: Model.SD,
        template: "../../../../assets/images/cv-basic.jpeg",
        owner: userList[0]
    },
    {
        id: 16,
        name: "model simple avec profil",
        model: Model.SP,
        template: "../../../../assets/images/cv-basic.jpeg",
        owner: userList[1]
    },
    {
        id: 17,
        name: "model simple",
        model: Model.SD,
        template: "../../../../assets/images/cv-basic.jpeg",
        owner: userList[0]
    },
    {
        id: 18,
        name: "model simple avec profil",
        model: Model.SP,
        template: "../../../../assets/images/cv-basic.jpeg",
        owner: userList[1]
    },
    {
        id: 19,
        name: "model simple",
        model: Model.SD,
        template: "../../../../assets/images/cv-basic.jpeg",
        owner: userList[0]
    },
    {
        id: 20,
        name: "model simple avec profil",
        model: Model.SP,
        template: "../../../../assets/images/cv-basic.jpeg",
        owner: userList[1]
    },
    {
        id: 21,
        name: "model simple avec profil",
        model: Model.SDP,
        template: "../../../../assets/images/cv-basic.jpeg",
        owner: userList[1]
    },
    {
        id: 22,
        name: "model simple",
        model: Model.SWD,
        template: "../../../../assets/images/cv-basic.jpeg",
        owner: userList[0]
    },
    {
        id: 23,
        name: "model simple avec profil",
        model: Model.SWDP,
        template: "../../../../assets/images/cv-basic.jpeg",
        owner: userList[1]
    },
    {
        id: 24,
        name: "model simple avec profil",
        model: Model.SDP,
        template: "../../../../assets/images/cv-basic.jpeg",
        owner: userList[1]
    },
    {
        id: 25,
        name: "model simple",
        model: Model.SWD,
        template: "../../../../assets/images/cv-basic.jpeg",
        owner: userList[0]
    },
    {
        id: 26,
        name: "model simple avec profil",
        model: Model.SWDP,
        template: "../../../../assets/images/cv-basic.jpeg",
        owner: userList[1]
    },
];

