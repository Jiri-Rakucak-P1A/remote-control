let accX = 0
radio.setGroup(160)
let speed = game.createSprite(2, 2)
let x = 0


input.onButtonPressed(Button.AB, function() {
    radio.sendString("Stop")
    speed.delete()
    speed = game.createSprite(2, 2)
})

input.onButtonPressed(Button.A, function() {
    radio.sendString("plus")
})

input.onButtonPressed(Button.B, function () {
    radio.sendString("minus")
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
