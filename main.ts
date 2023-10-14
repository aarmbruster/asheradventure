tiles.setCurrentTilemap(tilemap`level2`)
let mySprite = sprites.create(img`
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
    `, SpriteKind.Player)
music.play(music.stringPlayable("C5 A C5 G C5 F F F ", 120), music.PlaybackMode.LoopingInBackground)
game.onUpdate(function () {
    controller.player1.moveSprite(mySprite)
})
game.onUpdate(function () {
	
})
