let accX = 0
let accY = 0
let calibratedX = 0
let calibratedY = 0
let block1 = 0
let stop = 0
radio.setGroup(160)
basic.forever(function () {
    accX = input.acceleration(Dimension.X)
    accY = input.acceleration(Dimension.Y)
    if (block1 === 1){
        if (accY > 0){
            if (Math.abs(accY) > 250 || Math.abs(accY) < 500){
                radio.sendValue("GOL", 60)
                radio.sendValue("GOR", 45)
            }
            if (Math.abs(accY) > 500 || Math.abs(accY) < 750) {
                radio.sendValue("GOL", 120)
                radio.sendValue("GOR", 105)
            }
            if (Math.abs(accY) > 750 || Math.abs(accY) < 1000) {
                radio.sendValue("GOL", 180)
                radio.sendValue("GOR", 165)
            }
            if (Math.abs(accY) > 1000) {
                radio.sendValue("GOL", 255)
                radio.sendValue("GOR", 240)
            }
        }
        if (accY < 0) {
            if (Math.abs(accY) > 250) {
                radio.sendValue("ReverseL", -240)
                radio.sendValue("ReverseR", -255)
            }
            if (Math.abs(accY) > 500) {
                radio.sendValue("ReverseL", -240)
                radio.sendValue("ReverseR", -255)
            }
            if (Math.abs(accY) > 750) {
                radio.sendValue("ReverseL", -240)
                radio.sendValue("ReverseR", -255)
            }
            if (Math.abs(accY) > 1000) {
                radio.sendValue("ReverseL", -240)
                radio.sendValue("ReverseR", -255)
            }
            
        }
        if (accX < 0){
            if (Math.abs(accX) > 250) { radio.sendValue("Left", 120)}
        }
        if (accX > 0) {
            if (Math.abs(accX) > 250) { radio.sendValue("Right", 120) }
        }
    }
    
})

input.onButtonPressed(Button.AB, function() {
    calibratedX = accX
    calibratedY = accY
    block1 = 1
    if (stop === 0) {stop++}
    if (stop === 1) {stop=0;radio.sendString("Stop")}
    
})



