abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
    ) { }

    abstract getSepia(): void

    getCode(): number {
        return 3;
    }

    getShortVideoCalculator(): number{
        //Some complex calculation
        const time = 3;
        return time;
    }
}

class Instagram extends TakePhoto {

    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter);
    }

    getSepia(): void {
        
    }

    getCode(): number {
        return 2;
    }
}

const id = new Instagram("Portrait", "Vivid", 10);

console.log("HELLO", id.getShortVideoCalculator()); 