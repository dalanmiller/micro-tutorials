


//Bitmap loading image
var koffing_body = new Bitmap('../images/koffing.gif', function(err) {
      if (err) return;
      return new Rect(0, 0, 600, 600).attr({
        fillImage: this.attr({
          width: 800,
          height: 800
        }),
        fillRepeat: 1
      });
    });

//Koffay Text
var koffee_text = new Text('KOFFAAY!')
    .attr({
      x: 100, y: 80,
      line:'black',
      textFillColor: 'white',
      fontFamily: 'Impact', fontSize: '160px',
      textStrokeWidth: 6
      // textFillGradient: gradient.radial(['white', 'black'], 100),

    });



//Koffing lighting body mask #Doesn't work yet
// var koffing_body_mask = new Circle(150,150,80)
//     .attr({fillGradient: gradient.radial([['black', 50],'white'], 50, 250, 250)});

// koffing_body.attr({'mask':koffing_body_mask});

// Throw all the body parts into the group for animation
var koffing = new Group();
koffing.addChild(koffing_body);

stage.addChild(koffee_text);



// Koffing float animation
koffing_float = new KeyframeAnimation('4s', {
     from: {x:0, y:0},
    '50%': {x:0, y:40},
       to: {x:0, y:0}
},{
    easing:'bounceIn',
    repeat:Infinity
});

//Audio and audio loop
var koffee_audio = new Audio('../koffing.wav','1').addTo(stage);

koffing.on('click', function(){koffee_audio.play();});

stage.addChild(koffing);
koffing.animate(koffing_float);