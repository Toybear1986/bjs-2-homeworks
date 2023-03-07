class AlarmClock {
    constructor(alarmCollection, intervalId) {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        let alarm = { time: time, callback: callback, canCall: true }
        if (time === null | typeof callback !== "function") {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.find(alarm => alarm.time == time)) {
            return console.warn('Уже присутствует звонок на это же время');
        }
        return this.alarmCollection.push(alarm)
    }

    removeClock(time) {
        let index = this.alarmCollection.findIndex(alarm => alarm.time == time);
        if (index === -1) {
            return null;
        }
        return this.alarmCollection.splice(index, 1);
    }

    getCurrentFormattedTime() {
        var time = new Date();
        var formatedTime = time.toTimeString().substring(0, 5);
        return formatedTime;
    }

    start() {
        if (this.intervalId) {
            return;
        }

        this.intervalId = setInterval(() => this.alarmCollection.forEach(alarm => {
            if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall == true) {
                alarm.canCall = false;
                alarm.callback();
            }
        }), 1000)
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}