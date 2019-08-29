(function(){
    angular.module('appServices', ['firebase'])

    .factory("Transactions", function($firebaseArray) {
        var transactions = [];
        const ref = firebase.database().ref().child('data');
        
        return {
            all: function(callback) {

                transactions = $firebaseArray(ref);
                transactions.map(function(record){
                  record.amount = parseFloat(record.amount);
                });
                callback(transactions);
                
            },
            get: function(transactionId) {

                for (var i = 0; i < transactions.length; i++) {
                    
                    if (transactions[i].id == parseInt(transactionId)) {
                            return transactions[i];
                    }
                }
                return null;
            }
        };
    })
})();

