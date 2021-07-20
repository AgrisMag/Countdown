import { Component, Input } from '@angular/core';

@Component({
    selector: 'datums',
    template: `
        Šodien ir: {{datums | date :'medium'}}
        Šodiena ir:
        <code *ngIf="diena">{{diena}}</code>
        <code *ngIf="!diena">¯\\_(ツ)_/¯</code>
        bet tev interesē <strong class="text-info">{{taaargetDatums | date:'medium'}}</strong>
    `
})
export class DatumsComponent {
    @Input()
    taaargetDatums!: Date;
    datums: Date = new Date();
    diena!: number;

    constructor() {
        setInterval(() => this.tick(), 1000);
    }

    private tick() {
        this.datums = new Date();
        this.diena = this.datums.getDate();
    }
}
