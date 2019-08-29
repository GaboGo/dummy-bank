(function(){
    angular.module('appServices', ['firebase'])

    .factory("Transactions", function($firebaseArray) {
        var transactions = [];
        const db = firebase.database().ref().child('data');
        
        return {
            all: function() {

                transactions = $firebaseArray(db);
                return transactions;

            },
            get: function(transactionId) {

                for (var i = 0; i < transactions.length; i++) {
                    
                    if (transactions[i].id == parseInt(transactionId)) {
                            return transactions[i];
                    }
                }
                return null;
            },
            add: function(transaction) {
                transactions.$add(transaction);
            }
        };
    })
})();

