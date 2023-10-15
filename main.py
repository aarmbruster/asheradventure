def on_hit_wall(sprite, location):
    pass
scene.on_hit_wall(SpriteKind.player, on_hit_wall)

tiles.set_current_tilemap(tilemap("""
    Level1
"""))
mySprite = sprites.create(img("""
        . . e e e . . . 
            . e e d f d d . 
            . e d d d d . . 
            . . d d d . . . 
            . 6 9 9 . . . . 
            . 6 9 9 . . . . 
            . 6 9 9 . . . . 
            . 6 d d 6 . . . 
            . 6 d d 6 . . . 
            . 6 . . 6 . . . 
            . 6 . . 6 . . . 
            . e e . e e . .
    """),
    SpriteKind.player)
music.play(music.string_playable("C5 A C5 G C5 F F F ", 120),
    music.PlaybackMode.LOOPING_IN_BACKGROUND)

def on_on_update():
    controller.player1.move_sprite(mySprite)
game.on_update(on_on_update)

def on_on_update2():
    if mySprite.is_hitting_tile(CollisionDirection.LEFT):
        tiles.set_current_tilemap(tilemap("""
            Dungeon1
        """))
game.on_update(on_on_update2)
