var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["1b93c333-8652-427f-944e-f31002d24ff3"],"propsByKey":{"1b93c333-8652-427f-944e-f31002d24ff3":{"name":"piano keys.png_1","sourceUrl":"assets/v3/animations/_meNeKDzFWJO5mUVm9p9MZde4HbNpigypRhMmBaMZyg/1b93c333-8652-427f-944e-f31002d24ff3.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"1vMuRvmnjNy4oCX_U9tbhpgz7BjCszrD","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/_meNeKDzFWJO5mUVm9p9MZde4HbNpigypRhMmBaMZyg/1b93c333-8652-427f-944e-f31002d24ff3.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var piano = createSprite(200,280);
var button1 = createSprite(38,280,25,180);
button1.visible = false;
var button2 = createSprite(95,280,20,180);
button2.visible = false;
var button3 = createSprite(153,280,25,180);
button3.visible = false;
var button4 = createSprite(195,280,25,180);
button4.visible = false;
var button5 = createSprite(252,280,20,180);
button5.visible = false;
var button6 = createSprite(305,280,20,180);
button6.visible = false;
var button7 = createSprite(360,280,25,180);
button7.visible = false;
var button8 = createSprite(69,233,25,90);
button8.visible = false;
var button9 = createSprite(122,233,25,90);
button9.visible = false;
var button10 = createSprite(226,233,25,90);
button10.visible = false;
var button11 = createSprite(278,233,25,90);
button11.visible = false;
var button12 = createSprite(331,233,25,90);
button12.visible = false;


function draw() {
  background(180);
  piano.setAnimation("piano keys.png_1");
  piano.scale = 0.8;
  
  
  stroke("black");
  fill("black");
  
  text("Made by Piyush Landge",245,395);
  textSize(18);
  
  text("Press The Keys To Play The Funny Piano",40,120);
  textSize(50);
  
  text("FUNNY PIANO",30,70);
  
  
  if(mousePressedOver(button1)){
    playSound("assets/category_instrumental/marimba_downscale_1.mp3", false);
  }
  
  if(mousePressedOver(button2)){
    playSound("assets/category_instrumental/marimba_downscale_2.mp3", false);
  }
  
  if(mousePressedOver(button3)){
    playSound("assets/category_instrumental/marimba_music_1.mp3", false);
  }
  
  if(mousePressedOver(button4)){
    playSound("assets/category_instrumental/marimba_music_2.mp3", false);
  }
  
  if(mousePressedOver(button5)){
    playSound("assets/category_instrumental/marimba_repeating_1.mp3", false);
  }
  
  if(mousePressedOver(button6)){
    playSound("assets/category_instrumental/marimba_repeating_2.mp3", false);
  }
  
  if(mousePressedOver(button7)){
    playSound("assets/category_instrumental/marimba_upscale_1.mp3", false);
  }
  
  if(mousePressedOver(button8)){
    playSound("assets/category_instrumental/harpe_downscale_2.mp3", false);
  }
  
  if(mousePressedOver(button9)){
    playSound("assets/category_instrumental/harpe_downscale_1.mp3", false);
  }
  
  if(mousePressedOver(button10)){
    playSound("assets/category_instrumental/harpe_music_1.mp3", false);
  }
  
  if(mousePressedOver(button11)){
    playSound("assets/category_instrumental/harpe_music_2.mp3", false);
  }
  
  if(mousePressedOver(button12)){
    playSound("assets/category_instrumental/harpe_upscale_1.mp3", false);
  }
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
