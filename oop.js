

class Alif {
    constructor(alifSrc){
        this.audio = new Audio(alifSrc);
    }

    play = () =>{
        this.audio.currentTime = 0;
        this.audio.play();
    }
}