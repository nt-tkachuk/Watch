//import * as PIXI from 'pixi.js';//'pixi.js';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DigitalWatch = /** @class */ (function () {
    function DigitalWatch() {
        this.startWatch();
        this.startInterval();
    }
    DigitalWatch.prototype.startWatch = function () {
        this.date = new Date();
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
    };
    DigitalWatch.prototype.startInterval = function () {
        var _this = this;
        this.timer = setInterval(function () { return _this.settingWatch(); }, 1000);
    };
    DigitalWatch.prototype.settingWatch = function () {
        this.editTime();
        this.updateWatch();
    };
    DigitalWatch.prototype.editTime = function () {
        this.seconds += 1;
        if (this.seconds > 60) {
            this.seconds = 1;
            this.minutes += 1;
        }
        if (this.minutes > 60) {
            this.minutes = 1;
            this.hours += 1;
        }
        if (this.hours > 24) {
            this.hours = 1;
        }
    };
    DigitalWatch.prototype.updateWatch = function () {
        if (this.label == undefined) {
            this.label = document.createElement('label');
            document.body.appendChild(this.label);
        }
        this.label.textContent = "";
        this.perhapsAddZero(this.hours);
        this.label.textContent += this.hours + ":";
        this.perhapsAddZero(this.minutes);
        this.label.textContent += this.minutes + ":";
        this.perhapsAddZero(this.seconds);
        this.label.textContent += this.seconds + "";
    };
    DigitalWatch.prototype.perhapsAddZero = function (_num) {
        if (_num.toString().length == 1) {
            this.label.textContent += "0";
            return true;
        }
        return false;
    };
    return DigitalWatch;
}());
var AnalogWatch = /** @class */ (function (_super) {
    __extends(AnalogWatch, _super);
    function AnalogWatch() {
        var _this = _super.call(this) || this;
        _this.arrowHours = null;
        _this.arrowMinutes = null;
        _this.arrowSeconds = null;
        return _this;
    }
    AnalogWatch.prototype.updateWatch = function () {
        if (this.arrowSeconds == null) {
            var angle = 0;
            this.arrowHours = document.getElementById("hours");
            this.arrowMinutes = document.getElementById("minutes");
            this.arrowSeconds = document.getElementById("seconds");
        }
        console.trace("hhhh", this.geteditHourd(this.hours));
        angle = 360 / 12 * this.geteditHourd(this.hours);
        console.trace("angleangle", angle);
        this.arrowHours.style.transform = 'rotate(' + angle + 'deg)';
        angle = 360 / 60 * this.minutes;
        this.arrowMinutes.style.transform = 'rotate(' + angle + 'deg)';
        angle = 360 / 60 * this.seconds;
        this.arrowSeconds.style.transform = 'rotate(' + angle + 'deg)';
    };
    AnalogWatch.prototype.geteditHourd = function (_h) {
        if (_h > 12) {
            return _h - 12;
        }
        return -1;
    };
    return AnalogWatch;
}(DigitalWatch));
var digWatch = new DigitalWatch();
var anWatch = new AnalogWatch();
