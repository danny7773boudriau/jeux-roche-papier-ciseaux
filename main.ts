let _1 = 0
input.onGesture(Gesture.Shake, function () {
    _1 = randint(1, 3)
    if (_1 == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . . # . .
            . . . . .
            `)
    } else if (_1 == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # # . .
            . # # # #
            . . . # #
            . # # # #
            # # # . .
            `)
    }
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
