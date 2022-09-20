radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    basic.pause(100)
    basic.showNumber(num)
    basic.pause(100)
    if (receivedNumber == num) {
        basic.showString(" Yes!")
    } else {
        basic.showString(" No(")
    }
})
input.onButtonPressed(Button.A, function () {
    num += 1
    basic.showNumber(num)
    num = num
})
input.onButtonPressed(Button.B, function () {
    num += -1
    basic.showNumber(num)
    num = num
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(num)
    num = num
})
let num = 0
num = 0
radio.setGroup(55)
basic.showNumber(num)
