input.onButtonPressed(Button.A, function () {
    radio.sendString(Hello)
})
input.onButtonPressed(Button.AB, function () {
	
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == Hello) {
        basic.showLeds(`
            . . # . .
            # . # . #
            . # # # .
            # . # . #
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
	
})
let Hello = ""
Hello = "Hello!"
radio.setGroup(55)
