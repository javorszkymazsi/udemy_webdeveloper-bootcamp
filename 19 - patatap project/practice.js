<script type="text/paperscript" canvas="canvas">
			for (var x = 0; x < 20; ++x) {
				for (var y = 0; y < 20; ++y) {
					new Path.Circle(new Point(x*50, y*50), 5).fillColor = "rgb(255, 160, " + x*20 + ")";
				}
			}
</script>






function onKeyDown(event) {
          var circles = [];
          /*var keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
          var sounds = ['bubbles.mp3', 'clay.mp3', 'confetti.mp3', 'corona.mp3', 'dotted-spiral.mp3', 'flash-1.mp3', 'flash-2.mp3', 'flash-3.mp3', 'glimmer.mp3', 'moon.mp3', 'pinwheel.mp3', 'piston-1.mp3', 'piston-2.mp3', 'piston-3.mp3', 'prism-1.mp3', 'prism-2.mp3', 'prism-3.mp3', 'splits.mp3', 'squiggle.mp3', 'strike.mp3', 'suspension.mp3', 'timer.mp3', 'ufo.mp3', 'veil.mp3', 'wipe.mp3', 'zig-zag.mp3'];

          var keySoundPairs = [];
          for (var i = 0; i < keys.length; ++i) {
            keySoundPairs[i] = {
              key = keys[i];
              sound = new Howl({
                src: ['sounds/' + sounds[i]]
              });
            };
          }*/
          if (circles.length === 20) {
              circles.forEach(function(item) {
                  item.fillColor = "black";
              });
              circles = [];
          }          
          var newCircle = new Path.Circle(new Point(generateRandomInt(50, view.size.width - 50), generateRandomInt(50, view.size.height - 50)), generateRandomInt(50, 500));
          newCircle.fillColor = "rgb(" + generateRandomInt(0, 255) + ", " + generateRandomInt(0, 255) + ", " + generateRandomInt(0, 255) + ")";
          /*keysSoundPairs.forEach(function(item) {
            if (item === keysSoundPairs.key) {
              keysSoundPairs.sound.play();
            }
          });*/
          circles.push(newCircle);          
        }