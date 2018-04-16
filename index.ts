//import * as PIXI from 'pixi.js';//'pixi.js';


class DigitalWatch {
    private date:any;//object;
    private label:any;//object
    private timer:number;

    protected hours:number;
    protected minutes:number;
    protected seconds:number;

    constructor() {
        this.startWatch();
        this.startInterval();
    }

    startWatch(): void {
        this.date = new Date();
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
    }

    protected startInterval(): void {
        this.timer = setInterval(() => this.settingWatch(), 1000);
    }

    protected settingWatch(): void {
        this.editTime();
        this.updateWatch();
    }

    protected editTime():void {
        this.seconds+=1;

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
    }

    protected updateWatch():void {
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

    }

    private perhapsAddZero(_num:any):boolean {
        if (_num.toString().length == 1) {
            this.label.textContent += "0";
            return true;
        }
        return false;
    }
}





class AnalogWatch extends DigitalWatch {
    private arrowHours:any = null;
    private arrowMinutes:any = null;
    private arrowSeconds:any = null;

    constructor() {
        super();
    }

    updateWatch():void {
        if (this.arrowSeconds == null) {
            var angle = 0;
            this.arrowHours = document.getElementById("hours");
            this.arrowMinutes = document.getElementById("minutes");
            this.arrowSeconds = document.getElementById("seconds");
        }

        console.trace("hhhh", this.geteditHourd(this.hours))
        angle = 360/12*this.geteditHourd(this.hours);
        console.trace("angleangle",angle)
        this.arrowHours.style.transform = 'rotate('+ angle +'deg)';

        angle = 360/60*this.minutes;
        this.arrowMinutes.style.transform = 'rotate('+ angle +'deg)';

        angle = 360/60*this.seconds;
        this.arrowSeconds.style.transform = 'rotate('+ angle +'deg)';
    }

    private geteditHourd(_h:number):number {
        if (_h > 12) {
            return _h - 12;
        }
        return -1;
    }
}



let digWatch = new DigitalWatch();
let anWatch = new AnalogWatch();