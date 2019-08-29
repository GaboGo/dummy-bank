(function(){
	angular.module('appDirectives', [])

	.directive("portalHeader", function() {
		return {
			restrict: 'E',
			templateUrl: "views/portal-header.html"
		};
	})

	.directive("wrapper", function() {
		return {
			restrict: 'E',
			templateUrl: "views/wrapper.html",
			controller: "PortalController"
		};
	})
		
	.directive("transactionsList", function() {
		return {
			restrict: 'E',
			templateUrl: "views/transactions-list.html",
			controller: "ListController"
		};
	})

	.directive("transactionsForm", function() {
		return {
			restrict: 'E',
			templateUrl: "views/transactions-form.html",
			controller: "FormController"
		};
	})
})();

