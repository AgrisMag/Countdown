import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'my-name',
    template: `
        <span class="sveiciens" *ngIf="lang=='en'">Hellou</span>
        <span class="sveiciens" *ngIf="lang=='lv'">Sveiki</span>
        {{vards}}
    `,
    styles:[
        `:host  {
                display: block;
                background: blue;
                margin: 0 0 1em;
                padding: 1em;
                border-radius: 3px;
            }`,
        `.sveiciens {
            color: red
        }`
    ],
})
export class MyNameComponent {
    @Input() vards: string = '';
    @Input() lang: string  = 'en';
}
