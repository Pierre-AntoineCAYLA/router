import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { formation } from './formation/formation';

@Injectable()
export class FormationsResolvers implements Resolve<any> {
    
    constructor() {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise((resolve) => {
            setTimeout(() => resolve([
                new formation("Module Angular","angular"),
                new formation("Module JavaScript","js"),
            ]), 1000);
        });
    }
}