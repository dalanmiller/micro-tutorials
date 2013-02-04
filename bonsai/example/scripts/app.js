define(['jquery', 'bonsai'], function($, bonsai) {



    bonsai.run(document.getElementById('koffing'),
        {
            code:function(){

                //Bitmap loading image
                var koffing_body = new Bitmap('https://raw.github.com/dalanmiller/micro-tutorials/master/bonsai/example/images/koffing.gif', function(err) {
                      if (err) return;
                      return new Rect(0, 0, 600, 600).attr({
                        fillImage: this.attr({
                          width: 800,
                          height: 800
                        })
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
                    });

                // Throw all the body parts into the group for animation
                var koffing = new Group();
                koffing.addChild(koffing_body);




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

                //Put them on the stage and animate
                stage.addChild(koffing);
                stage.addChild(koffee_text);
                koffing.animate(koffing_float);
            }
        });
  return bonsai;
});