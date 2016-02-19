app.controller('scratchCtrl', function($scope){
	var card = $('#hidden-content');
	var percentage = 0
	$scope.cover;
	$scope.background;

	$scope.reset = function(){
		setWinLose()
		setGame()
		card.wScratchPad('reset');		
	}

	$scope.complete = function(){
		card.wScratchPad('clear');
	}

	$scope.start = function(){
		if(!$scope.background){
			setWinLose()
		}
		if(!$scope.cover) {
			$scope.cover = 'pics/cover.jpg'; 
		}
		setGame();		
	}	

	$scope.check = function(){
		if(percentage > 75){
			card.wScratchPad('clear');
		}
	}			

	function getRandNumb(){
		return Math.floor((Math.random() * 100) + 1);		
	}	

	function setWinLose(){
		var rand = getRandNumb();
		if(rand > 50){
			$scope.background = 'pics/youWin.jpg';	

		} else {
			$scope.background = 'pics/youLose.png';			
		}
		card.wScratchPad('bg', $scope.background);		
	}

	function setGame(){
		card.wScratchPad({
		  size: 20,               // The size of the brush/scratch.
		  bg: $scope.background,  // Background (image path or hex color).
		  fg: $scope.cover,  	  // Foreground (image path or hex color).
		  realtime: true,         // Calculates percentage in realitime.
		  scratchDown: function(e, percent){ percentage = Math.floor(percent); },   // Set scratchDown callback.
		  scratchUp: function(e, percent){ percentage = Math.floor(percent); },     // Set scratchUp callback.
		  scratchMove: function(e, percent){ percentage = Math.floor(percent); },   // Set scratcMove callback.
		  cursor: 'coin.png'      // Set cursor.
		});

		card.wScratchPad('cursor', 'url("./pics/coin.png") 5 5, default');
	}
});