import { Injectable }                             from '@angular/core';
import { TeamLeague, TeamInfo }                    from '../../shared.types/types';

@Injectable()
export class ContentService {
    constructor() {

    }

    public getInfoTeam(team: TeamInfo): string {
        return `Name: ${team.name} (${team.shortName}). 
                Cost: ${team.squadMarketValue}`
    }

    public parseUrl(url: string): string {
        const arraySplit: string[] = url.split('/');
        return arraySplit[arraySplit.length-1];
    }

    public setId(teamLeague: TeamLeague[]): void {
        teamLeague.forEach((elem: TeamLeague) => {
            elem.id = this.parseUrl(elem._links['team'].href);
        })
    }
}