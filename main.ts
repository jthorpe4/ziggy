controller.up.onEvent(ControllerButtonEvent.Pressed, function on_up_pressed() {
    
    Direction = "U"
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    
    ziggySprite.setImage(assets.image`
        myImage1
    `)
    Direction = "L"
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    
    ziggySprite.setImage(assets.image`
        myImage
    `)
    Direction = "R"
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function on_down_pressed() {
    
    Direction = "D"
})
let Direction = ""
let ziggySprite : Sprite = null
scene.setBackgroundColor(7)
music.play(music.stringPlayable("E D G F B A C5 B ", 240), music.PlaybackMode.UntilDone)
game.splash("Hello world")
ziggySprite = sprites.create(assets.image`
    myImage
`, SpriteKind.Player)
controller.moveSprite(ziggySprite)
Direction = "R"
