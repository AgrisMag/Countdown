import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1 class="sveiciens">Welcome</h1>
        <h2>What is your name?</h2>
        <my-name lang="lv" vards="Edgars"></my-name>
        <my-name vards="Edgars"></my-name>
    <hr>
        <datums [taaargetDatums]="datumi[0]"></datums>
    `,
    styles:[
        `
        `
    ]
})
export class AppComponent {

    datumi:Date[] = [];

    constructor() {
        const chrstmas = new Date();
        chrstmas.setMonth(11);
        chrstmas.setDate(24);
        this.datumi.push(chrstmas);
    }

}
