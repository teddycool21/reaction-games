let Player1 = 0
let Player2 = 0
basic.forever(function () {
    basic.pause(1000)
    basic.pause(randint(0, 4000))
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    while (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B))) {
        basic.pause(200)
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        Player1 += 1
        basic.showString("" + (Player1))
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        Player2 += 1
        basic.showString("" + (Player2))
    }
    basic.pause(1000)
    basic.clearScreen()
})
