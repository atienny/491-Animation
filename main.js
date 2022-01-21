let gameEngine = new GameEngine();

let ASSET_MANAGER = new AssetManager();

// sprites
ASSET_MANAGER.queueDownload("./sprites/sora.png");

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	ctx.imageSmoothingEnabled = false;
	
    gameEngine.init(ctx);

	new SceneManager(gameEngine);

	gameEngine.start();
});