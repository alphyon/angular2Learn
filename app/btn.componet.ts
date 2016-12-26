import { Component } from '@angular/core';

@Component({
    selector: 'btn-button',
    template: `
    <div (click)="divOnclick()">
        <button 
            class="btn btn-primary" 
            [class.active]="isActive"
            (click) = "onClick($event)" >Submit</button>
    </div>
    `
})

export class BtnComponent {
    isActive = true;

    divOnclick(){
        console.log("Desde e;l div");
        
    }

    onClick($event) {
        $event.stopPropagation();
        console.log("Click me :D", $event);

    }

}