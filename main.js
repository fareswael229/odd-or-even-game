let attempts = 0;
let Score = 0;
function guess (userguess) {
    attempts++;
    document.getElementById("attempts").innerHTML = attempts;
    const random_number = Math.floor(Math.random()*100)+1
    const correctanswer = random_number % 2 == 0 ? "even" : "odd";
    function sfx(iscorrect){
        let Audio = iscorrect ?
        document.getElementById("correct"):
        document.getElementById("wrong")
        Audio.pause()
        Audio.currentTime = 0;
        Audio.play()

    }

    if (correctanswer == userguess) {
        document.getElementById("display").innerHTML=
        "correct! your number is " + random_number
        Score++
        document.getElementById("Score").innerHTML= Score
        sfx(true)
    } else{
        document.getElementById("display").innerHTML=
        "wrong! your number is " + random_number
        sfx(false)
    }
}