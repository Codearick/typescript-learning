abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
    ){}

    abstract getSepia(): void

    getCode(): number
}

class Instagram extends TakePhoto{

}

const id = new Instagram("Portrait", "Vivid");