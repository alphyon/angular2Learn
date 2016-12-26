"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
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
var StarComponent = (function () {
    function StarComponent() {
        this.flag = true;
    }
    StarComponent.prototype.cambiarEstilo = function () {
        this.flag = !this.flag;
    };
    return StarComponent;
}());
StarComponent = __decorate([
    core_1.Component({
        selector: 'star',
        template: "<div>\n    <i class=\"glyphicon\"\n    [class.glyphicon-star-empty] = \"flag\" \n    [class.glyphicon-star] = \"!flag\"\n    (click)=\"cambiarEstilo()\"></i></div>"
    }),
    __metadata("design:paramtypes", [])
], StarComponent);
exports.StarComponent = StarComponent;
//# sourceMappingURL=star.componet.js.map