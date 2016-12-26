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
var BtnComponent = (function () {
    function BtnComponent() {
        this.isActive = true;
    }
    BtnComponent.prototype.divOnclick = function () {
        console.log("Desde e;l div");
    };
    BtnComponent.prototype.onClick = function ($event) {
        $event.stopPropagation();
        console.log("Click me :D", $event);
    };
    return BtnComponent;
}());
BtnComponent = __decorate([
    core_1.Component({
        selector: 'btn-button',
        template: "\n    <div (click)=\"divOnclick()\">\n        <button \n            class=\"btn btn-primary\" \n            [class.active]=\"isActive\"\n            (click) = \"onClick($event)\" >Submit</button>\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [])
], BtnComponent);
exports.BtnComponent = BtnComponent;
//# sourceMappingURL=btn.componet.js.map