<script type="text/paperscript" canvas="canvas">
			for (var x = 0; x < 20; ++x) {
				for (var y = 0; y < 20; ++y) {
					new Path.Circle(new Point(x*50, y*50), 5).fillColor = "rgb(255, 160, " + x*20 + ")";
				}
			}
</script>
