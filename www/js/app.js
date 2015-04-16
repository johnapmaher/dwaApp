var app = angular.module('starter', ['ionic', 'uiGmapgoogle-maps'])

// Map Controller *********************************************
.config(function(uiGmapGoogleMapApiProvider) {
  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyCtpRk6ybNEvTXuVpGxBoq9EJ3oH3WHzY8',
    v: '3.17',
    libraries: 'weather, geometry, visualization'
  });
})


.controller("mapController", function($scope, uiGmapGoogleMapApi) {
      $scope.markers = []
      uiGmapGoogleMapApi.then(function(maps) {
        $scope.map = { center: { latitude: 53.72, longitude: -6.35 }, zoom: 13 };
      });
})



// Categories Controller **************************************
.controller('CatCtrl', function($scope) {
  $scope.categories = [
  {name: 'Accommodation', subCats: ['B & B', 'Hostel', 'Hotel']},
  {name: 'Attractions', subCats: ['Places of Interest', 'Museums']},
  {name: 'Entertainment', subCats: ['Bar', 'Cinema', 'Events', 'Music', 'Theatre']},
  {name: 'Health Services', subCats: ['Dental', 'GP', 'Hospital', 'Medical Centre', 'Other']},
  {name: 'Places to Eat', subCats: ['Cafe', 'Fast Food', 'Lunch', 'Restaurant']},
  {name: 'Shopping', subCats: ['Banks', 'Beauticians', 'Books', 'Clothes', 'Groceries', 'Others', 'Pharmacy', 'Shopping Centre']},
  {name: 'Sport', subCats: ['Gyms', 'IWA Sports', 'Stadiums', 'Swimming Pools']},
  {name: 'Transport', subCats: ['Bus', 'Rail', 'Taxi']}
  ];

  $scope.toggleCategory = function(category) {
    if ($scope.isCategoryShown(category)) {
      $scope.shownCategory = null;
    } else {
      $scope.shownCategory = category;
    }
    };
    $scope.isCategoryShown = function(category) {
      return $scope.shownCategory == category;
    };
});

// Navigation and routing *************************************
app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  //Home view
  $stateProvider.state('home', {
    url: '/home',
    views: {
      home: {
        templateUrl: 'templates/home.html'
      }
    }
  })

  //Categories view
  $stateProvider.state('categories', {
    url: '/categories',
    views: {
      categories: {
        templateUrl: 'templates/categories.html'
      }
    }
  })


  //SubCat view
  $stateProvider.state('subCatListing', {
    url: '/subCatListing',
    views: {
      subCatListing: {
        templateUrl: 'templates/subCatListing.html'
      }
    }
  })

  //Map View
  $stateProvider.state('map', {
    url: '/map',
    views: {
      map: {
        templateUrl: 'templates/map.html'
      }
    }
  })


})
// End *********************************************************


// // Alt navigation
// app.config(function($stateProvider) {
//   $stateProvider
//   .state('home', {
//     url: '/home',
//     templateUrl: '/templates/home.html'
//   })
//   .state('categories', {
//     url: '/categories', 
//     templateUrl: 'categories.html'
//   });
// });

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
