let alifba = document.querySelectorAll('img');

alifbet = {
    'alif':{
        alifs: new Alif('./audio/alif.mp3')
    },
    'baa':{
        alifs: new Alif('./audio/baa.mp3')
    },
    'taa':{
        alifs: new Alif('./audio/taa.mp3')
    },
    'thaa':{
        alifs: new Alif('./audio/thaa.mp3')
    },
    'jiim':{
        alifs: new Alif('./audio/jiim.mp3')
    },
    'haa':{
        alifs: new Alif('./audio/haa.mp3')
    }
}

trigger = (event) => {
    let arabclick = event.target.id;
    if(arabclick in alifbet){
        let arabic = alifbet[arabclick]
        arabic.alifs.play();
    }

}

document.addEventListener('click', trigger);