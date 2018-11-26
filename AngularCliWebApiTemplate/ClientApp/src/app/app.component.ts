import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    public static API_ENDPOINT = "http://" + (window.location.href).split('/')[2] + "/";
}
