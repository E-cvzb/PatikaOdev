const card = document.getElementById("card");
// Butona basıldığında ıd algılama ve butonId fonksiyonuna gönder
card.addEventListener("click", (event) => {
    const keyId = event.target.id;
    buttonId(keyId);
});
// Klavyeden buton basıldığında ıd algılama ve butonId fonksiyonuna gönder
document.addEventListener("keydown", (event) => {
    const keyId = event.key.toLocaleLowerCase();
    buttonId(keyId);
});
function buttonId(keyId){
    switch (keyId) {
        case "a":
            new Audio("/ButtonOdev/sound/boom.wav").play();
            console.log("A harfi çalıştı");
            break;
        case "b":
            new Audio("/ButtonOdev/sound/clap.wav").play();
            console.log("B harfi çalıştı")
            break;  
        case "c":
            new Audio("/ButtonOdev/sound/hihat.wav").play();
            console.log("C harfi çalıştı")
            break;
        case "d":
            new Audio("/ButtonOdev/sound/kick.wav").play();
            console.log("D harfi çalıştı")
            break;      
        case "e":
            new Audio("/ButtonOdev/sound/openhat.wav").play();
            console.log("E harfi çalıştı")
            break;
        case "f":
            new Audio("/ButtonOdev/sound/ride.wav").play();
            console.log("F harfi çalıştı")
            break;
        case "g":
            new Audio("/ButtonOdev/sound/tom.wav").play();
            console.log("G harfi çalıştı")
            break;
    }
}
