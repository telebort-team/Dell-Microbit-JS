let pos = 0
input.onButtonPressed(Button.A, function () {
    pos += 10
    if (pos > 180) {
        pos = 180
    }
})
input.onButtonPressed(Button.B, function () {
    pos += -10
    if (pos < 0) {
        pos = 0
    }
})
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, pos)
})
