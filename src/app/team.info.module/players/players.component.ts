import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.css']
})
export class PlayerComponent implements OnInit {
    ngOnInit() {
        console.log('PlayerComponent is work');
    }
}