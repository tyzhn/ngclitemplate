import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { TestComponent } from './Components/test/test.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        HomeComponent
    ],

    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'test', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'test', component: TestComponent }
        ])
    ],

    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }