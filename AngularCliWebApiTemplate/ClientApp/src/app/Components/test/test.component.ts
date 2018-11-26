import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css'],
    providers: [TestService]
})

export class TestComponent implements OnInit {
    public notes;
    constructor(private testService: TestService) { }

    ngOnInit() {
        window.sessionStorage.setItem("MemberId", "1");
        this.getNotesByMemberId();
    }

    getNotesByMemberId() {
        this.testService.getNotesByMemberId(window.sessionStorage.getItem("MemberId"))
            .subscribe(response => {
                this.notes = response
            },
                error => console.log("Error: HTTP Get Service!!!"),
                () => console.log("Success: HTTP Get Request Completed!!!")
            );
    }
}
