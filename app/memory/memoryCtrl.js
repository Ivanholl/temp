app.controller('memoryCtrl', function($scope) {
    var cards = $('.canvas'),
        numberOfSqrs = 12,
        percentage = 0,
        numberOfPics = 6,
        cardIndexes = {
            firstRow: [],
            secRow: [],
            tirthRow: []
        },
        checkCounter = 0,
        rowOneWinCounter = 0,
        rowTwoWinCounter = 0,
        rowThreeWinCounter = 0;

    cards.wScratchPad({
      size: 20,               // The size of the brush/scratch.
      bg: 'pics/blanck.png',                   // Background (image path or hex color).
      fg: 'pics/memoryCover.png',  	  // Foreground (image path or hex color).
      realtime: true,         // Calculates percentage in realitime.
      scratchDown: function(e, percent){ percentage = Math.floor(percent); },   // Set scratchDown callback.
      scratchUp: function(e, percent){ percentage = Math.floor(percent); },     // Set scratchUp callback.
      scratchMove: function(e, percent){ percentage = Math.floor(percent); },   // Set scratcMove callback.
      cursor: 'coin.png'      // Set cursor.
  }).isDrawingMode = false;

    $scope.check = function(target) {
        if(percentage > 60){
            $("#" + target).wScratchPad('clear');
            checkCounter++;
		}
        if(checkCounter > 11){
            checkWinLose()
        }
    }

    $scope.reset = function() {
        cards.wScratchPad('reset');
        cardIndexes.firstRow = [];
        cardIndexes.secRow = [];
        cardIndexes.tirthRow = [];
        rowOneWinCounter = 0;
        rowTwoWinCounter = 0;
        rowThreeWinCounter = 0;
        setGame()
    }
    $scope.checkWin = function(){
        checkWinLose()
    }
    $scope.clear = function(){
        cards.wScratchPad('clear')
    }

    function getRandNumb(max){
		return Math.floor((Math.random() * max) + 1);
	}

    function setGame(){
        for (var i = 1; i <= numberOfSqrs; i++) {
            var rand = getRandNumb(numberOfPics);
            $('#squere-' + i).css('background-image', 'url(' + 'pics/symbols/' + rand + '.png' + ')');

            if(i <= 4) cardIndexes.firstRow.push(rand)
            if(i > 4 && i <= 8) cardIndexes.secRow.push(rand)
            if(i > 8 && i <= 12) cardIndexes.tirthRow.push(rand)
        }
    }

    setGame()

    function checkWinLose(){
        for (var i = 0; i < cardIndexes.firstRow.length -1; i++) {
            if(cardIndexes.firstRow[i] == cardIndexes.firstRow[i + 1] || cardIndexes.firstRow[i] == cardIndexes.firstRow[i + 2]) {
                rowOneWinCounter++;
            }
            if(cardIndexes.secRow[i] == cardIndexes.secRow[i + 1] || cardIndexes.secRow[i] == cardIndexes.secRow[i + 2]) {
                rowTwoWinCounter++;
            }
            if(cardIndexes.tirthRow[i] == cardIndexes.tirthRow[i + 1] || cardIndexes.tirthRow[i] == cardIndexes.tirthRow[i + 2]) {
                rowThreeWinCounter++;
            }
        }
        if(rowOneWinCounter >= 2) alert("Row 1 wins")
        if(rowTwoWinCounter >= 2) alert("Row 2 wins")
        if(rowThreeWinCounter >= 2) alert("Row 3 wins")
    }

});
