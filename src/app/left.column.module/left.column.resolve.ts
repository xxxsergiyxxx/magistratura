import { Injectable }               from '@angular/core';
import { Router, 
         Resolve, 
         RouterStateSnapshot, 
         ActivatedRouteSnapshot }   from '@angular/router';
import { Observable }               from 'rxjs';
import { Response }                 from '@angular/http';
import { GetDataService }           from '../shared.services/http.getdata.service';
import { TeamLeague }               from '../shared.types/types';

@Injectable()
export class TeamsResolver implements Resolve <TeamLeague[]> {
    private url: string;

    constructor( private dataService: GetDataService ) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable <TeamLeague[]> {
        this.url = `http://api.football-data.org/v1/competitions/${route.params['id']}/leagueTable`
        return this.dataService.getData(this.url)
                .map((res: Response) => {
                    return res.json().standing;
                })
    }
}