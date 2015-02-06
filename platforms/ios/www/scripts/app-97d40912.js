"use strict";angular.module("reckoning",["ngAnimate","ngTouch","ngSanitize","ngRoute","ngMaterial","ngCordova","js-data"]).config(["$stateProvider","urlRouterProvider",function(e){console.log("setting up routes"),e.state("main",{url:"/",views:{home:{templateUrl:"app/main/main.html",controller:"MainCtrl"}}}).state("clients",{url:"/clients",views:{clients:{templateUrl:"app/clients/clients.html",controller:"ClientsCtrl"}}}).state("client.new",{url:"/client",views:{"client-new":{templateUrl:"app/client/client.html",controller:"ClientCtrl"}}}).state("client.view",{url:"/client/:id",views:{home:{templateUrl:"app/client/client.html",controller:"ClientCtrl"}}}),$urlRouterProvider.otherwise({redirectTo:"/"})}]).config(["$mdThemingProvider",function(e){console.log("setting up themes"),e.theme("default").primaryPalette("grey",{}),e.theme("default-dark","default").dark(),e.theme("secondary").primaryPalette("indigo",{}),e.theme("secondary-dark","secondary").dark()}]).run(["DS",function(e){console.log("setting up storage"),e.registerAdapter("localstorage",new DSLocalStorageAdapter,{"default":!0}),e.defineResource("client"),e.defineResource("invoice")}]),angular.module("reckoning").controller("NavbarCtrl",["$scope",function(e){e.date=new Date}]),angular.module("reckoning").controller("MainCtrl",["$scope","DS","$cordovaInAppBrowserProvider",function(e,t,n){console.log("getting everytyhing"),console.log(t),t.findAll("client").then(function(t){e.clients=t}),t.findAll("invoice").then(function(t){e.invoices=t}),e.openBrowser=function(e){e||(e="http://www.watersidedevelopment.co.uk/?source=co.uk.watersidedevelopment.reckoning.home.footer"),n.open(e)}}]),angular.module("reckoning").controller("ClientsCtrl",["$scope",function(e){e.data={selectedIndex:1},e.next=function(){e.data.selectedIndex=Math.min(e.data.selectedIndex+1,2)},e.previous=function(){e.data.selectedIndex=Math.max(e.data.selectedIndex-1,0)},console.log(e)}]),angular.module("reckoning").controller("ClientCtrl",["$scope",function(e){e.user={title:"Developer",email:"ipsum@lorem.com",firstName:"",lastName:"",company:"Google",address:"1600 Amphitheatre Pkwy",city:"Mountain View",state:"CA",biography:"Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!",postalCode:"94043"}}]),angular.module("reckoning").run(["$templateCache",function(e){e.put("app/client/client.html",'<div id="reckoning-client reckoning-create" layout-fill="" layout="column"><header ng-include="\'components/navbar/navbar.html\'"></header><md-content md-theme="default-dark" class="md-padding" layout="row" layout-sm="column"><md-input-container><label>Name</label> <input ng-model="client.name"></md-input-container><md-input-container><label>Email</label> <input ng-model="client.email" type="email"></md-input-container></md-content><md-content md-theme="secondary" class="md-padding"><form name="userForm"><md-input-container flex=""><label>Contact Details</label></md-input-container><div layout="" layout-sm="column"><md-input-container flex=""><label>First Name</label> <input ng-model="client.firstName"></md-input-container><md-input-container flex=""><label>Last Name</label> <input ng-model="theMax"></md-input-container></div><md-input-container flex=""><label>Address</label> <input ng-model="client.address1"></md-input-container><md-input-container flex=""><input ng-model="client.address2"></md-input-container><md-input-container flex=""><input ng-model="client.address3"></md-input-container><div layout="" layout-sm="column"><md-input-container flex=""><label>City</label> <input ng-model="client.city"></md-input-container><md-input-container flex=""><label>State</label> <input ng-model="client.state"></md-input-container><md-input-container flex=""><label>Postal Code</label> <input ng-model="client.postalCode"></md-input-container></div><md-input-container flex=""><label>Notes</label> <textarea ng-model="client.biography" columns="1" md-maxlength="500"></textarea></md-input-container></form></md-content></div>'),e.put("app/clients/clients.html",'<div layout-fill="" layout="column"><header ng-include="\'components/navbar/navbar.html\'"></header><md-whiteframe class="md-whiteframe-z2" layout="" layout-align="center center"></md-whiteframe></div>'),e.put("app/main/main.html",'<div id="reckoning-desktop" layout-fill="" layout="column"><header ng-include="\'components/navbar/navbar.html\'"></header><md-whiteframe class="md-whiteframe-z2" flex="" layout-fill=""><md-toolbar md-theme="secondary" class="md-hue-1"><div class="md-toolbar-tools" layout="row"><h2 flex="75"><span>Recent Clients</span></h2><span flex=""></span><h3 class="md-toolbar-tools" layout-align="end center"><ng-if data.client.length=""></ng-if><ng-if !data.clients.length=""><md-button md-theme="secondary-dark" class="md-raised md-primary md-hue-2" ng-href="/#/client">Add First Client</md-button></ng-if></h3></div></md-toolbar><md-content><ng-if !data.clients.length="">SILLY JOKE ABOUT SELLING SOMETHING</ng-if><ng-if data.clients.length=""><ng-repeat="client in="" data.recentclients"=""><div class="md-tile-content"><h3>{{client.what}}</h3><h4>{{client.who}}</h4><p>{{client.notes}}</p></div><md-divider inset=""></md-divider></ng-repeat="client></ng-if></md-content></md-whiteframe><md-whiteframe class="md-whiteframe-z2" flex="" layout-fill=""><md-toolbar md-theme="secondary" class="md-hue-1"><div class="md-toolbar-tools" layout="row"><h2 flex="75"><span>Recent Invoices</span></h2><span flex=""></span><h3 class="md-toolbar-tools md-toolbar-tools-bottom" layout-align="end center"><md-button md-theme="secondary-dark" class="md-raised md-primary md-hue-2" ng-href="/#/invoices">All Invoices&hellip;</md-button></h3></div></md-toolbar><md-content flex="" layout-fill=""><md-list class="reckoning-list"><md-item ng-repeat="invoice in data.recentInvoices"><md-item-content><div class="md-tile-left"><img ng-src="{{item.face}}" alt="{{item.who}}" class="face"></div><div class="md-tile-content"><h3>{{invoice.what}}</h3><h4>{{invoice.who}}</h4><p>{{item.notes}}</p></div></md-item-content><md-divider inset=""></md-divider></md-item></md-list></md-content></md-whiteframe><footer><md-toolbar layout="row" layout-align="start center"><span layout-align="start center" class="md-toolbar-tools" flex="75">&copy; 2014-2015 Waterside Development (UK) Ltd.</span> <span flex=""></span><h4 layout-align="end center" class="md-toolbar-tools"><md-button md-theme="secondary-dark" class="md-raised md-primary md-hue-2" ng-click="openBrowser()">Show Me More&hellip;</md-button></h4></md-toolbar></footer></div>'),e.put("components/navbar/navbar.html",'<md-toolbar layout="row" ng-controller="NavbarCtrl" class="md-hue-2"><section flex-order="1" flex="33" layout="row" layout-align="start center"><md-button href="#" hide-md="">Back</md-button></section><section flex-order="2" flex="33" layout="row" layout-align="center center"><md-button href="#">Reckoning</md-button></section></md-toolbar>')}]);