import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyNameComponent } from './my-name.component';
import { DatumsComponent } from './datums.component';

@NgModule({
    declarations: [
        AppComponent,
        MyNameComponent,
        DatumsComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
