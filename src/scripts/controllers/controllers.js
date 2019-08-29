(function(){
    angular.module('appControllers', [])

    .controller('PortalController', function($scope, Transactions){

        $scope.transactions = [];
        $scope.totalAmount = 5824.76;
        $scope.transactions = Transactions.all();
        
    })

    .controller('ListController', function($scope){
        $scope.myOrderBy = 'transactionDate';
        $scope.reverse = true;

        $scope.orderBy = function(criteria) {
            $scope.reverse = ($scope.myOrderBy === criteria) ? !$scope.reverse : true;
            $scope.myOrderBy = criteria;
        };
        
    })

    .controller('FormController', function($scope, Transactions){
        $scope.record = {}
        $scope.categoryCodes = ["#12a580","#c12020","#c89616","#e25a2c","#1180aa","#12a580","#fbbb1b"]
        $scope.transactionTypes = ["Card Payment","Online Transfer","Transaction","Automatic Debit"]
        
        $scope.submit = function(){

            if(window.confirm("Are you sure you want to make this transaction to "+ this.to + " for $" + parseFloat(this.amount) + " ?")){ 
                
                $scope.record = {
                    amount: parseFloat(this.amount),
                    categoryCode: $scope.categoryCodes[Math.floor(Math.random() * 6)],
                    merchant: this.to,
                    merchantLogo: "../assets/icons/default-img.png",
                    transactionDate: new Date().getTime(),
                    transactionType: $scope.transactionTypes[Math.floor(Math.random() * 2)]
                }

                Transactions.add($scope.record);
                $scope.totalAmount -= Math.round(this.amount * 100) / 100;
                $scope.record = {}
                this.amount = "";
                this.to = "";
                $scope.myOrderBy = 'transactionDate';
                $scope.reverse = true;
                rezizeList();
            }
        }

        function rezizeList() {
            document.getElementById("myList").style.height = parseInt(window.getComputedStyle(document.getElementById("myList")).height)  + 50 + "px";
        }

    })
})();

    