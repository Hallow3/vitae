import { CV } from "./cv.model";
import { Model } from "./enumerations/model.enum";

export interface Template {
    model: Model;
    CVs: CV[]
}