controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    ziggySprite.setImage(assets.image`ziggyLeft`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    ziggySprite.setImage(assets.image`ziggyRight`)
})
let ziggySprite: Sprite = null
scene.setBackgroundColor(7)
music.play(music.stringPlayable("E D G F B A C5 B ", 240), music.PlaybackMode.UntilDone)
game.splash("Hello world")
ziggySprite = sprites.create(assets.image`ziggyLeft`, SpriteKind.Player)
controller.moveSprite(ziggySprite)
