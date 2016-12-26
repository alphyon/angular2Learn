import {Component} from '@angular/core';

@Component({
    selector: 'txt-component',
    template: `
    <input type="text" [value]="title" [(ngModel)]="title" />
    <input type="button" (click)="title=''" value="Clear" />
    {{title}}
    `
})
export class TxtComponent{
    title = "Angular App";
}