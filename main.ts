let accX = 0
radio.setGroup(160)
let speed = game.createSprite(2, 2)
let x = 0


input.onButtonPressed(Button.AB, function() {
    radio.sendString("Stop")
    speed.delete()
    speed = game.createSprite(2, 2)
    radio.sendValue("n", 0)
})

let nasobitel = 0
let a = 0
let b = 0

input.onButtonPressed(Button.A, function() {
    radio.sendValue("n", -1)
    speed.move(-1)
})

input.onButtonPressed(Button.B, function () {
    radio.sendValue("n", 1)
    speed.move(1)
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
