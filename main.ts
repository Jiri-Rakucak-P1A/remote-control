let accX = 0
radio.setGroup(160)
let speed = game.createSprite(2, 2)
let x = 0

input.onButtonPressed(Button.AB, function() {
    if (x === 0){
        x++
        radio.sendString("Go")
    }
    else {
        radio.sendString("Stop")
        speed.delete()
        speed = game.createSprite(2, 2)
        x = 0
    }
    

    
})

let q = 0
let w = 0

input.onButtonPressed(Button.A, function() {
    if (q === 2){
        q = q*0
        radio.sendString("Stop")
        speed.delete()
        speed = game.createSprite(2, 2)
    }
    if (q === 1){
        radio.sendValue("nasobitel", -1)
        speed.move(-1)
        q + 1
    }
    if (q===0){
        radio.sendValue("nasobitel", -0.6)
        speed.move(-1)
        console.log("up")
        q + 1
    }
    
})
input.onButtonPressed(Button.B, function () {
    if (w === 2) {
        w = w * 0
        radio.sendString("Stop")
        speed.delete()
        speed = game.createSprite(2, 2)

    }
    if (w === 1) {
        radio.sendValue("nasobitel", 1)
        speed.move(1)
        w + 1
    }
    if (w === 0){
        radio.sendValue("nasobitel", 0.6)
        speed.move(1)
        w + 1
    }
})







basic.forever(function() {
    accX = input.acceleration(Dimension.X)
    if (accX < -300){
        radio.sendString("L")
    }
    else{
        radio.sendString("LGo")
    }
    if(accX > 300){
        radio.sendString("R")
    }
    else{
        radio.sendString("RGo")
    }
    

basic.pause(50)
})
