class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;
        this.sora = {x: 0, y:0};
        this.loadLevel();
    };

    loadLevel() {
        
        this.sora = new Sora(this.game, 0, 0, ASSET_MANAGER.getAsset("./sprites/sora.png"));
        this.game.addEntity(this.sora);

    };

    update() {
        let midpoint = { x : PARAMS.CANVAS_WIDTH / 2 - PARAMS.BLOCKWIDTH / 2, y : PARAMS.CANVAS_HEIGHT / 2 - PARAMS.BLOCKWIDTH / 2 };
        this.x = this.sora.BB.center.x - midpoint.x;
        this.y = this.sora.BB.center.y - midpoint.y;
    };

    draw(ctx) {

    };

}