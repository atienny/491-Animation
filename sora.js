class Sora {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, { game, x, y, spritesheet });
        this.facing = [0]; // down = 0, up = 1, right = 2, left = 3
        this.state = [0]; // idle = 0, walking = 1
        this.speed = 1;
        this.velocity = { x : 0, y : 0 };
        this.animations = [];
        this.updateBB();
        this.loadAnimations();
    };

    loadAnimations() {
        for (let i = 0; i < 3; i++) { // 2 states
            this.animations.push([]);
            for (let j = 0; j < 4; j++) { // 4 facings
                this.animations[i].push([]);
            }  
        }

        // idle animation
        this.animations[0][0] = new Animator(this.spritesheet, 0, 0, 88, 95, 1, 0.45, false, true);

        this.animations[0][1] = new Animator(this.spritesheet, 0, 470, 88, 95, 6, 0.45, false, true);

        // walking animation
        this.animations[1][0] = new Animator(this.spritesheet, 0, 94, 88, 95, 8, 0.15, false, true);
        this.animations[1][1] = new Animator(this.spritesheet, 0, 188, 88, 95, 8, 0.15, false, true);
        this.animations[1][2] = new Animator(this.spritesheet, 0, 282, 88, 95, 8, 0.15, false, true);
        this.animations[1][3] = new Animator(this.spritesheet, 0, 376, 88, 95, 8, 0.15, false, true);

        this.animations[2][0] = new Animator(this.spritesheet, 0, 564, 88, 95, 4, 0.2, false, true);
        this.animations[2][1] = new Animator(this.spritesheet, 0, 658, 88, 95, 4, 0.2, false, true);
        this.animations[2][2] = new Animator(this.spritesheet, 0, 752, 88, 95, 4, 0.2, false, true);
        this.animations[2][3] = new Animator(this.spritesheet, 0, 846, 88, 95, 4, 0.2, false, true);


        };
    
    update() {

        // let velocity_x = 0;
        // let velocity_y = 0;
        
        if (this.game.Q == true) {
            this.state[0] = 0;
            this.facing[0] = 0;
            
        }

        if (this.game.Q == false) {
            this.state[0] = 0;
            this.facing[0] = 1;
        } 

        if (this.game.down) {
            //velocity_y += this.speed;
            this.state[0] = 1;
            this.facing[0] = 0;
        }

        if (this.game.up) {
            //velocity_y -= this.speed;
            this.state[0] = 1;
            this.facing[0] = 1;
        }

        if (this.game.right) {
            //velocity_x += this.speed;
            this.state[0] = 1;
            this.facing[0] = 3;
        }

        if (this.game.left) {
            //velocity_x -= this.speed;
            this.state[0] = 1;
            this.facing[0] = 2;
        }

        if (this.game.down & this.game.Q == false && this.game.E) {
            this.state[0] = 2;
            this.facing[0] = 0;
        }

        if (this.game.up & this.game.Q == false && this.game.E) {
            this.state[0] = 2;
            this.facing[0] = 1;
        }

        if ((this.game.left & this.game.Q == false && this.game.E) || 
                                                    (this.game.down == false && 
                                                    this.game.up == false && 
                                                    this.game.Q == false && 
                                                    this.game.E)) {
            this.state[0] = 2;
            this.facing[0] = 2;
        }

        if (this.game.right & this.game.Q == false && this.game.E) {
            this.state[0] = 2;
            this.facing[0] = 3;
        }
    
        // this.velocity.x = velocity_x;
        // this.velocity.y = velocity_y;
        // this.x += this.velocity.x;
        // this.y += this.velocity.y;
            
    };

    updateBB() {
        this.BB = new BoundingBox(this.x, this.y, 32 * PARAMS.SCALE, 32 * PARAMS.SCALE);
    };
    
    draw(ctx) {
        this.animations[this.state[0]][this.facing[0]]
            .drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, PARAMS.SCALE);
    };
};