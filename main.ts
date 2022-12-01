radio.onReceivedString(function (receivedString) {
    if (receivedString == "A2") {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        STRIP1.showColor(neopixel.colors(NeoPixelColors.Black))
        STRIP2.showColor(neopixel.colors(NeoPixelColors.Black))
        if (KK2 == 0) {
            music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
            KK2 = 5
        }
        if (KK2 == 5) {
            basic.pause(1000)
            strip.showRainbow(1, 120)
            STRIP1.showRainbow(121, 240)
            STRIP2.showRainbow(241, 360)
            strip.show()
            STRIP1.show()
            STRIP2.show()
            music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
        }
    } else if (receivedString == "B2") {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        STRIP1.showColor(neopixel.colors(NeoPixelColors.Black))
        STRIP2.showColor(neopixel.colors(NeoPixelColors.Black))
        STRIP1.show()
        STRIP2.show()
        if (KK1 == 0) {
            music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
            KK1 = 5
        }
    } else if (receivedString == "C2") {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        STRIP1.showColor(neopixel.colors(NeoPixelColors.White))
        STRIP2.showColor(neopixel.colors(NeoPixelColors.Black))
        STRIP2.show()
        if (KK == 0) {
            music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
            KK = 5
        }
    } else {
    	
    }
})
let KK1 = 0
let KK2 = 0
let KK = 0
let STRIP2: neopixel.Strip = null
let STRIP1: neopixel.Strip = null
let strip: neopixel.Strip = null
radio.setGroup(123)
strip = neopixel.create(DigitalPin.P13, 8, NeoPixelMode.RGB_RGB)
STRIP1 = neopixel.create(DigitalPin.P14, 8, NeoPixelMode.RGB_RGB)
STRIP2 = neopixel.create(DigitalPin.P16, 8, NeoPixelMode.RGB_RGB)
KK = 0
strip.showColor(neopixel.colors(NeoPixelColors.White))
STRIP1.showColor(neopixel.colors(NeoPixelColors.White))
STRIP2.showColor(neopixel.colors(NeoPixelColors.White))
pins.digitalWritePin(DigitalPin.P3, 1)
