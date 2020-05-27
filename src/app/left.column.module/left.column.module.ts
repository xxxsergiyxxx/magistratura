import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule }       from '@angular/material';
import { MdDialog }            from '@angular/material';

import { LeftColumn } from './left.column.component';
import { Container } from './container/container.component';
import { Link } from './link/link.component';
import { Content } from './content/content.component';
import { MainRouter } from './left.column.routing';
import { Border } from './content/content.directive';
import { ContentService } from './content/content.service';
import { TeamInfo } from '../team.info.module/team.info.module';

@NgModule({
    imports: [
        CommonModule,
        MainRouter,
        MaterialModule.forRoot(),
        TeamInfo
    ],
    declarations: [
        LeftColumn,
        Container,
        Link,
        Content,
        Border
    ],
    exports: [
        LeftColumn
    ],
    providers: [
        ContentService
    ]
})
export class LeftColumnModule {

}