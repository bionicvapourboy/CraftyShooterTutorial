$(document).ready(function() {
  Crafty.init(960, 320);
    Crafty.background('#32a6ff');
    Crafty.load(["img/spaceship.png"], function() {
      Crafty.scene("Main");
     });
    
  Crafty.scene("Main", function() {
    var spaceShip = Crafty.e("2D, Canvas, Image, Multiway")
    .image("img/spaceship.png")
    .multiway(3, {
      W : -90,
      S : 90,
      D : 0,
      A : 180
      });
  });
});