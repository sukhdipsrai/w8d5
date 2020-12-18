class Clock {
    constructor() {
        let myDate = new Date();
        this.hours = myDate.getHours();
        this.minutes = myDate.getMinutes();
        this.seconds = myDate.getSeconds();
        this.printTime();
        // 4. Schedule the tick at 1 second intervals.
        setInterval(
            this._tick.bind(this)
        , 1000)
    }

    printTime() {
        // Format the time in HH:MM:SS
        // Use console.log to print it.
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    _tick() {
        // 1. Increment the time by one second.
        this.seconds += 1;

        this.minutes += Math.floor(this.seconds / 60);
        this.seconds = this.seconds % 60;

        this.hours += Math.floor(this.minutes / 60);
        this.minutes = this.minutes % 60;

        this.hours = this.hours % 24;

        // 2. Call printTime.
        this.printTime();      
    }
}

const clock = new Clock();


