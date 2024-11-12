import { Pipe, PipeTransform } from "@angular/core";
import { Model } from "../models/enumerations/model.enum";

@Pipe({
    name: 'namer'
})
export class NamerPipe implements PipeTransform{

    transform(cvModel: Model): string{
      switch(cvModel){
        case Model.SD: 
            return "Simple avec description";
        case Model.SWD:
            return "Simple sans description";
        case Model.SP:
            return "Simple avec photo";
        case Model.SWP:
            return "Simple sans photo";
        default:
            return "Simple sans photo";
      }
    }
}