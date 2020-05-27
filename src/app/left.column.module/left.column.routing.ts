import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Content }              from './content/content.component';
import { TeamsResolver }        from './left.column.resolve';

const routes: Routes = [
    {
        path: 'competition/:id',
        component: Content,
        resolve: {
            teams: TeamsResolver
        }
    }
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
        ],
    exports: [
        RouterModule
    ],
    providers: [
        TeamsResolver
    ]
})

export class MainRouter {

}