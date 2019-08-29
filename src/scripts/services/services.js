angular.module('appServices', [])

.factory("Transactions", function($http) {
    var transactions = [];

    return {
        all: function(callback) {
        
            $http.get('../mock/transactions.json').success(function(data)
            {
                transactions = data.data;

                transactions.map(function(record){
                    record.amount = parseFloat(record.amount);
                });
                
                callback(transactions);
            });

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


