class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }
    start = () => {
        this.tick();
        this.interval = setInterval(this.tick, 1000);
    };

    pause = () => {
        clearInterval(this.interval);
    }

    tick = () => {
        const timeRemaining = parseFloat(this.durationInput.value);
        this.durationInput.value = timeRemaining - 1;
        // console.log('tick');
    };

    // importantMethodToCall() {
    //     console.log('important thing was done');
    // }
}


const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);




// ==============================================

    //first way see notes
    //     this.startButton.addEventListener('click', this.start);
    // }
    // start = () => {
    //     this.importantMethodToCall();
    // } 
    //first solution see notes

    //second way see notes
    //     this.startButton.addEventListener('click', this.start.bind(this));
    // }
    // start() {
    //     this.importantMethodToCall();
    // }
    //second way see notes

    //third way see notes
    //     this.startButton.addEventListener('click', this.start());
    // }
    // start = () => {
    //     this.importantMethodToCall();
    // }
    //third way see notes


    // console.log('Time to start the timer!');
    // console.log(this);

