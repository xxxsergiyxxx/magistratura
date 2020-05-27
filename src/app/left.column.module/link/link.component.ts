import { Component, Input, OnInit }     from '@angular/core';

import { Competition }                  from '../../shared.types/types';

@Component({
    selector: 'link-competition',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.css']
})
export class Link implements OnInit {
    @Input() competition: Competition;

    constructor() {
        //this.competition.league
    }

    ngOnInit() {
    }
}