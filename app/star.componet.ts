import {Component} from '@angular/core';

// @Component({
//     selector: 'star',
//     template: `<div><i class="glyphicon glyphicon-star{{ styleToggle }}" (click)="cambiarEstilo()"></i></div>`
// })

// export class StarComponent{
//     styleToggle = '-empty';

//     cambiarEstilo(){
//         if(this.styleToggle == '-empty'){
//             this.styleToggle = '';
//         }else{
//             this.styleToggle='-empty';
//         }
//     }
// }

@Component({
    selector: 'star',
    template: `<div>
    <i class="glyphicon"
    [class.glyphicon-star-empty] = "flag" 
    [class.glyphicon-star] = "!flag"
    (click)="cambiarEstilo()"></i></div>`
})

export class StarComponent{
    flag = true;

    cambiarEstilo(){
        this.flag = !this.flag;
    }
}