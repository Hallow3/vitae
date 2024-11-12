import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from "@angular/router";
import { CV } from "../models/cv.model";
import { CVService } from "../services/cv.service";
import { Observable } from "rxjs";

@Injectable()
export class CVResolver implements Resolve<CV>{

    constructor(private cvService: CVService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CV> {
        const id = route.paramMap.get('id')
        return this.cvService.getCVById(id!)
    }
    
}