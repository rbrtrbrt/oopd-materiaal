class Star extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {

        super(scene, x, y, "obj_star")

        scene.add.existing(this);
        scene.physics.add.existing(this);
        scene.physics.world.enableBody(this);
        gameState.stars.add(this);


        if (gameState.level3Active == true) {
            this.body.allowGravity = false
        }

        gameState.stars.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });

        scene.physics.add.collider(this, gameState.platforms);
        scene.physics.add.overlap(this, gameState.player, collectStar, null, scene);

        function collectStar(star, player) {
            star.destroy();
            gameState.score += 50;
        }
    }
}