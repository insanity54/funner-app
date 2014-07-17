var state;
var renderer;
var guys = [];


function init() {
    stage = new PIXI.Stage(0x66FF99);
    renderer = PIXI.autoDetectRenderer(400, 300);
    
    document.body.appendChild(renderer.view);
    requestAnimFrame(animate);

    var guyTexture = PIXI.Texture.fromImage("./assets/img/dude1.png");
    guy = new PIXI.Sprite(guyTexture);

    guy.anchor.x = 0.5;
    guy.anchor.y = 0.5;

    guy.position.x = 200;
    guy.position.y = 150;

    stage.addChild(guy);

}


function animate() {
    requestAnimFrame(animate);
    renderer.render(stage);

}


window.onload = function() {
    document.body.innerText = 'test';

    init();
    animate();

    
    
};
