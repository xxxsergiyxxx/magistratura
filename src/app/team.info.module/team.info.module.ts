import { NgModule } from '@angular/core';

import { TeamInfoRouter } from './team.info.routing';
import { PlayerComponent } from './players/players.component';
import { ContainerTeam } from './container/container.component';
import { TeamResolver }  from './team.info.resolve';

@NgModule({
    imports: [
        TeamInfoRouter
    ],
    declarations: [
        PlayerComponent,
        ContainerTeam
    ],
    providers: [
        TeamResolver
    ]
})
export class TeamInfo {

}