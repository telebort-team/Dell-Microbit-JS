input.onButtonPressed(Button.A, function () {
    music.changeTempoBy(20)
})
input.onButtonPressed(Button.B, function () {
    music.changeTempoBy(-20)
})
music.beginMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Forever)
