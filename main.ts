scene.onHitWall(SpriteKind.Player, function (sprite, location) {
	
})
tiles.setCurrentTilemap(tilemap`Level1`)
let Hero = sprites.create(assets.image`Hero`, SpriteKind.Player)
music.play(music.stringPlayable("C5 A C5 G C5 F F F ", 120), music.PlaybackMode.LoopingInBackground)
controller.player1.moveSprite(Hero)
scene.cameraFollowSprite(Hero)
game.onUpdate(function () {
    if (Hero.isHittingTile(CollisionDirection.Left)) {
        tiles.setCurrentTilemap(tilemap`Dungeon0`)
    }
    if (Hero.isHittingTile(CollisionDirection.Top)) {
        tiles.setCurrentTilemap(tilemap`Dungeon1`)
    }
    if (Hero.isHittingTile(CollisionDirection.Right)) {
        tiles.setCurrentTilemap(tilemap`Dungeon4`)
    }
    if (Hero.isHittingTile(CollisionDirection.Bottom)) {
        tiles.setCurrentTilemap(tilemap`Dungeon6`)
    }
    scene.cameraFollowSprite(Hero)
    camera
})
