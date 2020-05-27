import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'container-team',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css']
})

export class ContainerTeam {
    constructor(private route: ActivatedRoute) {
        this.route.data.subscribe(res => {
            res['team'];
        })
    }
}