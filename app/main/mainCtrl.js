app.controller('mainCtrl', function($scope){
    $scope.game = {
        simple: false,
        memory: false,
        create: false
    }

    $scope.chooseGame = function(game){
        switch (game) {
            case "simple":
                falcify($scope.game)
                $scope.game.simple = true;
                break;
            case "memory":
                falcify($scope.game)
                $scope.game.memory = true;
                break;
            case 'create':
                falcify($scope.game)
                $scope.game.create = true;
            default:
                break;
            }
    }
    function falcify(obj) {
        for (key in obj){
            obj[key] = false;
        }
    }
});
