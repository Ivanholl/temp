app.controller('createjsCtrl', function($scope){
    var stage = new createjs.Stage("createjsCanvas");

    function init(){

        drawCircle(50,50,50,"DeepSkyBlue")
        drawCircle(50,50,25,"White")


        drawPic(50,50,"pics/memoryCover.png")
        stage.update();

        /*createjs.Ticker.addEventListener("tick", function () {

        });*/
        createjs.Ticker.setInterval(25);
    }

    function drawCircle(x, y,r,color){
        var circle = new createjs.Shape();
        circle.graphics.beginFill(color).drawCircle(0, 0, r);
        circle.x = x;
        circle.y = y;
        stage.addChild(circle);
    }

    function drawPic(x,y,picLocation){
        var pic = new createjs.Bitmap(picLocation);
        pic.x = x;
        pic.y = y;
        stage.addChild(pic)
    }


    stage.on("stagemousemove", function(evt) {
        
    });

    init()
})
