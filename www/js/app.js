// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider){
    $stateProvider.state('home',{
        url:'/home',
        templateUrl:'templates/home.html'
    });

    $stateProvider.state('alfabeto',{
        url:'/alfabeto',
        templateUrl:'templates/alfabeto.html'
    });

    $stateProvider.state('numerais',{
        url:'/numerais',
        templateUrl:'templates/numerais.html'
    });

    $stateProvider.state('sinaisdainformatica',{
        url:'/sinaisdainformatica',
        templateUrl:'templates/sinaisdainformatica.html'
    });

    $urlRouterProvider.otherwise('/home')
})

.controller('AlertaCtrl', ['$scope', '$ionicPopup', function($scope, $ionicPopup){

  $scope.letras = [

    
    {   
        l: "A",
        img:"imagens/a.jpg",
        click: 'mostrar_a()'
    },

    {   
        l: "B",
        img:"imagens/b.jpg",
        click: 'mostrar_b()'
    },

    {   
        l: "C",
        img:"imagens/c.jpg",
        click: 'mostrar_c()'
    },

    {   
        l: "D",
        img:"imagens/d.jpg",
        click: 'mostrar_d()'
    },

    {   
        l: "E",
        img:"imagens/e.jpg",
        click: 'mostrar_e()'
    },

    {   
        l: "F",
        img:"imagens/f.jpg",
        click: 'mostrar_f()'
    },

    {   
        l: "G",
        img:"imagens/g.jpg",
        click: 'mostrar_g()'
    },

    {   
        l: "H",
        img:"imagens/h.jpg",
        click: 'mostrar_h()'
    },

    {   
        l: "I",
        img:"imagens/i.jpg",
        click: 'mostrar_i()'
    },

    {   
        l: "J",
        img:"imagens/j.jpg",
        click: 'mostrar_j()'
    },

    {   
        l: "K",
        img:"imagens/k.jpg",
        click: 'mostrar_k()'
    },

    {   
        l: "L",
        img:"imagens/l.jpg",
        click: 'mostrar_l()'
    },

    {   
        l: "M",
        img:"imagens/m.jpg",
        click: 'mostrar_m()'
    },

    {   
        l: "N",
        img:"imagens/n.jpg",
        click: 'mostrar_n()'
    },

    {   
        l: "O",
        img:"imagens/o.jpg",
        click: 'mostrar_o()'
    },

    {
        l:"P",
        img:"imagens/p.jpg",
        click: 'mostrar_p()'
    },

    {
        l:"Q",
        img:"imagens/q.jpg",
        click: 'mostrar_q()'
    },

    {
        l:"R",
        img:"imagens/r.jpg",
        click: 'mostrar_r()'
    },

    {
        l:"S",
        img:"imagens/s.jpg",
        click: 'mostrar_s()'
    },

    {
        l:"T",
        img:"imagens/t.jpg",
        click: 'mostrar_t()'
    },

    {
        l:"U",
        img:"imagens/u.jpg",
        click: 'mostrar_u()'
    },

    {
        l:"V",
        img:"imagens/v.jpg",
        click: 'mostrar_v()'
    },

    {
        l:"W",
        img:"imagens/w.jpg",
        click: 'mostrar_w()'
    },

    {
        l:"X",
        img:"imagens/x.jpg",
        click: 'mostrar_x()'
    },

    {
        l:"Y",
        img:"imagens/y.jpg",
        click: 'mostrar_y()'
    },

    {
        l:"Z",
        img:"imagens/z.jpg",
        click: 'mostrar_z()'
    }


    
    ];

    $scope.numerais = [

    
    {   
        n: "Número 0",
        img:"imagens/n0.jpg",
        click: 'mostrar_0()'
    },

    {   
        n: "Número 1",
        img:"imagens/n1.jpg",
        click: 'mostrar_1()'
    },

    {   
        n: "Número 2",
        img:"imagens/n2.jpg",
        click: 'mostrar_2()'
    },

    {   
        n: "Número 3",
        img:"imagens/n3.jpg",
        click: 'mostrar_3()'
    },

    {   
        n: "Número 4",
        img:"imagens/n4.jpg",
        click: 'mostrar_4()'
    },

    {   
        n: "Número 5",
        img:"imagens/n5.jpg",
        click: 'mostrar_5()'
    },

    {   
        n: "Número 6",
        img:"imagens/n6.jpg",
        click: 'mostrar_6()'
    },

    {   
        n: "Número 7",
        img:"imagens/n7.jpg",
        click: 'mostrar_7()'
    },

    {   
        n: "Número 8",
        img:"imagens/n8.jpg",
        click: 'mostrar_8()'
    },

    {   
        n: "Número 9",
        img:"imagens/n9.jpg",
        click: 'mostrar_9()'
    }

    
    ];

    $scope.sinaisInfor = [

    
    {   
        si: "Arquivo",
        img:"imagens/arquivo.jpg",
        click: 'mostrar_arquivos()'
    },

    {   
        si: "Excel",
        img:"imagens/excel.jpg",
        click: 'mostrar_excel()'
    },

    {   
        si: "Fonte",
        img:"imagens/fonte.jpg",
        click: 'mostrar_fonte()'
    },

    {   
        si: "Gabinete",
        img:"imagens/gabinete.jpg",
        click: 'mostrar_gabinete()'
    },

    {   
        si: "Monitor",
        img:"imagens/monitor.jpg",
        click: 'mostrar_monitor()'
    },

    {   
        si: "Mouse",
        img:"imagens/mouse.jpg",
        click: 'mostrar_mouse()'
    },

    {   
        si: "Processador",
        img:"imagens/processador.jpg",
        click: 'mostrar_processador()'
    },

    {   
        si: "Software",
        img:"imagens/software.jpg",
        click: 'mostrar_software()'
    },

    {   
        si: "Sistema Operacional",
        img:"imagens/sistemaoperacional.jpg",
        click: 'mostrar_sistemaoperacional()'
    },

    {   
        si: "Teclado",
        img:"imagens/teclado.jpg",
        click: 'mostrar_teclado()'
    },

    {
      si:"Word",
      img:"imagens/word.jpg",
        click: 'mostrar_word()'
    }

    
    ];
  
  $scope.mostrar_a = function(){
      var alerta = $ionicPopup.alert({
         title: 'Letra A',
         template: '<img src="imagens/a.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_b = function(){
      var alerta = $ionicPopup.alert({
         title: 'Letra B',
         template: '<img src="imagens/b.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_c = function(){
      var alerta = $ionicPopup.alert({
         title: 'Letra C',
         template: '<img src="imagens/c.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_d = function(){
      var alerta = $ionicPopup.alert({
         title: 'Letra D',
         template: '<img src="imagens/d.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_e = function(){
      var alerta = $ionicPopup.alert({
         title: 'Letra E',
         template: '<img src="imagens/e.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_f = function(){
      var alerta = $ionicPopup.alert({
         title: 'Letra F',
         template: '<img src="imagens/f.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_g = function(){
      var alerta = $ionicPopup.alert({
         title: 'Letra G',
         template: '<img src="imagens/g.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_h = function(){
      var alerta = $ionicPopup.alert({
         title: 'Letra H',
         template: '<img src="imagens/h.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_i = function(){
      var alerta = $ionicPopup.alert({
         title: 'Letra I',
         template: '<img src="imagens/i.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_j = function(){
      var alerta = $ionicPopup.alert({
         title: 'Letra J',
         template: '<img src="imagens/j.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_k = function(){
      var alerta = $ionicPopup.alert({
         title: 'Letra K',
         template: '<img src="imagens/k.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_l = function(){
      var alerta = $ionicPopup.alert({
         title: 'Letra L',
         template: '<img src="imagens/l.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_m = function(){
      var alerta = $ionicPopup.alert({
         title: 'Letra M',
         template: '<img src="imagens/m.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_n = function(){
      var alerta = $ionicPopup.alert({
         title: 'Letra N',
         template: '<img src="imagens/n.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_o = function(){
      var alerta = $ionicPopup.alert({
         title: 'Letra O',
         template: '<img src="imagens/o.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_p = function(){
      var alerta = $ionicPopup.alert({
         title: 'Letra P',
         template: '<img src="imagens/p.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_q = function(){
      var alerta = $ionicPopup.alert({
         title: 'Letra Q',
         template: '<img src="imagens/q.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_r = function(){
      var alerta = $ionicPopup.alert({
         title: 'Letra R',
         template: '<img src="imagens/r.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_s = function(){
      var alerta = $ionicPopup.alert({
         title: 'Letra S',
         template: '<img src="imagens/s.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_t = function(){
      var alerta = $ionicPopup.alert({
         title: 'Letra T',
         template: '<img src="imagens/t.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_u = function(){
      var alerta = $ionicPopup.alert({
         title: 'Letra U',
         template: '<img src="imagens/u.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_v = function(){
      var alerta = $ionicPopup.alert({
         title: 'Letra V',
         template: '<img src="imagens/v.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_w = function(){
      var alerta = $ionicPopup.alert({
         title: 'Letra W',
         template: '<img src="imagens/w.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_x = function(){
      var alerta = $ionicPopup.alert({
         title: 'Letra X',
         template: '<img src="imagens/x.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_y = function(){
      var alerta = $ionicPopup.alert({
         title: 'Letra Y',
         template: '<img src="imagens/y.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_z = function(){
      var alerta = $ionicPopup.alert({
         title: 'Letra Z',
         template: '<img src="imagens/z.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  
  $scope.mostrar_0 = function(){
      var alerta = $ionicPopup.alert({
         title: 'Número 0',
         template: '<img src="imagens/n0.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_1 = function(){
      var alerta = $ionicPopup.alert({
         title: 'Número 1',
         template: '<img src="imagens/n1.jpg" width="100%">' 
       });

      alerta.then();
  
  }
  ;
  $scope.mostrar_2 = function(){
      var alerta = $ionicPopup.alert({
         title: 'Número 2',
         template: '<img src="imagens/n2.jpg" width="100%">' 
       });

      alerta.then();
  
  };


  $scope.mostrar_3 = function(){
      var alerta = $ionicPopup.alert({
         title: 'Número 3',
         template: '<img src="imagens/n3.jpg" width="100%">' 
       });

      alerta.then();
  
  }
  ;
  $scope.mostrar_4 = function(){
      var alerta = $ionicPopup.alert({
         title: 'Número 4',
         template: '<img src="imagens/n4.jpg" width="100%">' 
       });

      alerta.then();
  
  }
  ;
  $scope.mostrar_5 = function(){
      var alerta = $ionicPopup.alert({
         title: 'Número 5',
         template: '<img src="imagens/n5.jpg" width="100%">' 
       });

      alerta.then();
  
  }
  ;
  $scope.mostrar_6 = function(){
      var alerta = $ionicPopup.alert({
         title: 'Número 6',
         template: '<img src="imagens/n6.jpg" width="100%">' 
       });

      alerta.then();
  
  }
  ;
  $scope.mostrar_7 = function(){
      var alerta = $ionicPopup.alert({
         title: 'Número 7',
         template: '<img src="imagens/n7.jpg" width="100%">' 
       });

      alerta.then();
  
  }
  ;
  $scope.mostrar_8 = function(){
      var alerta = $ionicPopup.alert({
         title: 'Número 8',
         template: '<img src="imagens/n8.jpg" width="100%">' 
       });

      alerta.then();
  
  }
  ;
  $scope.mostrar_9 = function(){
      var alerta = $ionicPopup.alert({
         title: 'Número 9',
         template: '<img src="imagens/n9.jpg" width="100%">' 
       });

      alerta.then();
  
  }

  ;
  $scope.mostrar_arquivos = function(){
      var alerta = $ionicPopup.alert({
         title: 'Arquivos',
         template: '<img src="imagens/arquivo.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_excel = function(){
      var alerta = $ionicPopup.alert({
         title: 'Excel',
         template: '<img src="imagens/excel.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_fonte = function(){
      var alerta = $ionicPopup.alert({
         title: 'Fonte',
         template: '<img src="imagens/fonte.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_gabinete = function(){
      var alerta = $ionicPopup.alert({
         title: 'Gabinete',
         template: '<img src="imagens/gabinete.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_monitor = function(){
      var alerta = $ionicPopup.alert({
         title: 'Monitor',
         template: '<img src="imagens/monitor.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_mouse = function(){
      var alerta = $ionicPopup.alert({
         title: 'Mouse',
         template: '<img src="imagens/mouse.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_processador = function(){
      var alerta = $ionicPopup.alert({
         title: 'Processador',
         template: '<img src="imagens/processador.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_software = function(){
      var alerta = $ionicPopup.alert({
         title: 'Software',
         template: '<img src="imagens/software.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_sistemaoperacional = function(){
      var alerta = $ionicPopup.alert({
         title: 'Sistema Operacional',
         template: '<img src="imagens/sistemaoperacional.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_teclado = function(){
      var alerta = $ionicPopup.alert({
         title: 'Teclado',
         template: '<img src="imagens/teclado.jpg" width="100%">' 
       });

      alerta.then();
  
  };
  $scope.mostrar_word = function(){
      var alerta = $ionicPopup.alert({
         title: 'Word',
         template: '<img src="imagens/word.jpg" width="100%">' 
       });

      alerta.then();
  
  }

}] );
