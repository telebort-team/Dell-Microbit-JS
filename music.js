input.onButtonPressed(Button.A, function () {
    music.changeTempoBy(20)
})
input.onButtonPressed(Button.B, function () {
    music.changeTempoBy(-20)
})
input.onButtonPressed(Button.AB, function () {
    music.stopMelody(MelodyStopOptions.All)
})
music.beginMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Forever)
