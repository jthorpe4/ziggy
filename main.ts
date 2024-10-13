controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ziggySprite.sayText(":)", 500, false)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    ziggySprite.setImage(assets.image`ziggyLeft`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    ziggySprite.setImage(assets.image`ziggyRight`)
})
let ziggySprite: Sprite = null
scene.setBackgroundColor(7)
game.splash("Hello world")
ziggySprite = sprites.create(assets.image`ziggyLeft`, SpriteKind.Player)
controller.moveSprite(ziggySprite)
