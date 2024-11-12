import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, delay, map, Observable } from "rxjs";
import { CV, cvList } from "../models/cv.model";
import { Model } from "../models/enumerations/model.enum";
import { Template } from "../models/template.model";

@Injectable()
export class CVService {

    private _templates$ = new BehaviorSubject<Template[]>([]);
    private _cv$ = new BehaviorSubject<CV | undefined>(undefined);
    private _loading$ = new BehaviorSubject<boolean>(false);

    public setLoading(loading: boolean){
        this._loading$.next(loading);
    }

    public get templates$(){
        return this._templates$.asObservable();
    }
    
    public get cv$(){
        return this._cv$.asObservable();
    }

    public get loading$(){
        return this._loading$.asObservable();
    }

    constructor(private httpClient : HttpClient) {}

    public getTemplates(){
        this.setLoading(true);
        setInterval(() => this.fetchData()
        , 1000);
        
    }
    fetchData(): void {
        this._templates$.next([
            {
                model: Model.SWP,
                CVs: cvList.filter(cv => cv.model === Model.SWP)
            },
            {
                model: Model.SD,
                CVs: cvList.filter(cv => cv.model === Model.SD)
            },
            {
                model: Model.SP,
                CVs: cvList.filter(cv => cv.model === Model.SP)
            },
            {
                model: Model.SWD,
                CVs: cvList.filter(cv => cv.model === Model.SWD)
            }
            ,
            {
                model: Model.SDP,
                CVs: cvList.filter(cv => cv.model === Model.SDP)
            },
            {
                model: Model.SWDP,
                CVs: cvList.filter(cv => cv.model === Model.SWDP)
            }

        ]);
        this.setLoading(false);
    }

    public getCV(id: number){
        this.setLoading(true);
        delay(1500);
        this.setLoading(false);
        return this._cv$.next(cvList.find(cv => cv.id === id));
    }

    public getCVById(id: string) : Observable<CV>{
        this.setLoading(true);
        delay(1500);
        this.setLoading(false);
         return this.cv$.pipe(
            map(cv => cvList.filter(cv => cv.id.toString() === id.toString())[0])
         )
    }

    

}


