import { Component, OnInit }    from '@angular/core';
import { Response }             from '@angular/http';
import { GetDataService }       from '../../shared.services/http.getdata.service';
import { Competition }          from '../../shared.types/types';

@Component({
    selector: 'container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css']
})
export class Container implements OnInit {
    private url: string;
    public competitions: Competition[];

    constructor(private httpService: GetDataService) {

    }

    ngOnInit(): void {
        this.url = 'http://api.football-data.org/v1/competitions';
        this.httpService.getData(this.url).subscribe((res: Response) => {
            this.competitions = res.json();
        });
    }
}