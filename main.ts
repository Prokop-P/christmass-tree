input.onButtonPressed(Button.A, function () {
    stop = 1
})
input.onButtonPressed(Button.B, function () {
    stop = 0
})
let stop = 0
stop = 0
let strip = neopixel.create(DigitalPin.P1, 6, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
stop = 0
basic.forever(function () {
    while (stop == 1) {
        strip.rotate(1)
        strip.show()
        basic.pause(200)
    }
})
