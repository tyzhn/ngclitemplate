import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { AppComponent } from '../../app.component';

@Injectable()

export class TestService {
    constructor(private _http: Http) { };

    getNotesByMemberId(memberId: any) {
        return this._http.get(AppComponent.API_ENDPOINT + 'api/Notes/GetNotesByMemberId?memberId=' + parseInt(memberId))
            .map((response: Response) => response.json());
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }
}
