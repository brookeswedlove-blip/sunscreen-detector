let reading = 0
basic.forever(function () {
    reading = input.lightLevel()
    led.plotBarGraph(
    reading,
    255
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.pause(100)
        basic.showNumber(input.lightLevel())
    }
})
