import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PlayerComponent } from './players/players.component';
import { ContainerTeam } from './container/container.component';
import { TeamResolver }  from './team.info.resolve';

const routes: Routes = [
    {
        path: 'team/:id',
        component: ContainerTeam,
        resolve: {
            team: TeamResolver
        },
        children: [
            {
                path: 'players',
                component: PlayerComponent
            }
        ]
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TeamInfoRouter {
    
}
