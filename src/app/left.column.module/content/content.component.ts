import { Component, OnInit }                      from '@angular/core';
import { ActivatedRoute }                         from '@angular/router';

import { TeamLeague, TeamInfo}                    from '../../shared.types/types';
import { GetDataService }                         from '../../shared.services/http.getdata.service';
import { ContentService }                         from './content.service';

@Component({
    selector: 'content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class Content implements OnInit {
    public teams: TeamLeague[];
    public teamInfo: TeamInfo;
    public position: string = 'before';
    public tooltip: string;
    public url: string;

    constructor(private route : ActivatedRoute, 
                private getDataservice: GetDataService,
                private contentService: ContentService) {
        this.route.data.subscribe(res => {
            this.teams = res['teams'];
            if(this.teamInfo) {
                this.teamInfo = null;
            }
            this.contentService.setId(this.teams);
        })
    }

    ngOnInit(): void {
    }

    public getInfo(index: number) {
        this.tooltip = 'Loading...';
        this.route.params.subscribe(res => {
            this.url = this.teams[index]._links['team'].href;
            this.getDataservice.getData(this.url)
                .map(res => res.json())
                .subscribe((res: TeamInfo) => {
                    this.teamInfo = res;
                    this.tooltip = this.contentService.getInfoTeam(this.teamInfo);
                });
        })
    }
}