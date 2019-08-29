(function(){
  
  const DB_CONFIG = {
    apiKey: "AIzaSyDPf1s-Afw8Qlk4Iu1BIDt-JE6h36q6qx0",
    authDomain: "transactionlist-2a046.firebaseapp.com",
    databaseURL: "https://transactionlist-2a046.firebaseio.com",
    projectId: "transactionlist-2a046",
    storageBucket: "",
    messagingSenderId: "757663390790",
    appId: "1:757663390790:web:79d8f8c6036c462c"
  };

  firebase.initializeApp(DB_CONFIG);

  angular.module('transactionsPortal', ['appControllers','appDirectives', 'appServices']);
    
})();
  