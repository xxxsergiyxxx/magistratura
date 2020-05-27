import { Injectable }               from '@angular/core';
import { Router, 
         Resolve, 
         RouterStateSnapshot, 
         ActivatedRouteSnapshot }   from '@angular/router';
import { Observable }               from 'rxjs';
import { Response }                 from '@angular/http';
import { GetDataService }           from '../shared.services/http.getdata.service';
import { TeamInfo }                 from '../shared.types/types';

@Injectable()
export class TeamResolver implements Resolve <TeamInfo> {
    private url: string;
    constructor(private getDataService: GetDataService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable <TeamInfo> {
        this.url = `http://api.football-data.org/v1/teams/${route.params['id']};`
        return this.getDataService.getData(this.url)
                .map(res => res.json());
    }
}


