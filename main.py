def on_up_pressed():
    global Direction
    Direction = "U"
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_left_pressed():
    global Direction
    ziggySprite.set_image(assets.image("""
        myImage1
    """))
    Direction = "L"
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_pressed():
    global Direction
    ziggySprite.set_image(assets.image("""
        myImage
    """))
    Direction = "R"
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_down_pressed():
    global Direction
    Direction = "D"
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

Direction = ""
ziggySprite: Sprite = None
scene.set_background_color(7)
music.play(music.string_playable("E D G F B A C5 B ", 240),
    music.PlaybackMode.UNTIL_DONE)
game.splash("Hello world")
ziggySprite = sprites.create(assets.image("""
    myImage
"""), SpriteKind.player)
controller.move_sprite(ziggySprite)
Direction = "R"