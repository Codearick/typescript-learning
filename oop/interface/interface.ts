interface TakePhoto{
    cameraMode: string
    filter: string
    photoBust: number
}

interface Story{
    createStory(): void
}

class Instagram implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public photoBust: number
    )
    {}

    createStory(): void {
        console.log("Story created!")
    }
}

class SnapChat implements TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string, 
        public photoBust: number,
        public snaps: string
    ){}
}
