
/* 
   Copyright (c) 2015.
 
   This file is part of Project Manager.
 
   Project Manager is free software: you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.
 
   Project Manager is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.
 
   You should have received a copy of the GNU General Public License
   along with Project Manager.  If not, see <http://www.gnu.org/licenses/>. */
/**
require('angular');
require('bootstrap');
require('angular-css');
require('angular-resource');
require('angular-route');
require('angular-sanitize');
require('angular-translate');
require('angular-translate-loader-static-files');
require('angular-ui-bootstrap');
require('ng-file-upload');
require('file-saver');
require('jszip');
 */

require('./core/dhis2Api');
require('./directives/directives.module');
require('./directives/header/headerController');
require('./directives/menu/menuController');

var appManagerMSF = angular.module("appManagerMSF", ['ngRoute','Dhis2Api', 'Directives', 'pascalprecht.translate','ui.bootstrap','d2Menu', 'ngFileUpload', 'angularTreeview', 'angularCSS']);

appManagerMSF.config(function($routeProvider) {
 
	$routeProvider.when('/dataapproval', {
		templateUrl: "modules/dataapproval/dataapprovalView.html",
		controller: "dataapprovalController"
	});
	$routeProvider.when('/metadataimport', {
		templateUrl: "modules/metadataimport/metadataimportView.html",
		controller: "metadataimportController",
		css: "modules/metadataimport/metadataimportCss.css"
	});
	$routeProvider.when('/metadataexport', {
		templateUrl: "modules/metadataexport/metadataexportView.html",
		controller: "metadataexportController"
	});
	$routeProvider.when('/analytics', {
		templateUrl: "modules/analytics/analyticsView.html",
		controller: "analyticsController"
	});
	$routeProvider.when('/dataimport', {
		templateUrl: "modules/dataimport/dataimportView.html",
		controller: "dataimportController"
	});
	$routeProvider.when('/dataexport', {
		templateUrl: "modules/dataexport/dataexportView.html",
		controller: "dataexportController",
		css: "modules/dataexport/dataexportCss.css"
	});
	$routeProvider.when('/trackerdataimport', {
		templateUrl: "modules/trackerdataimport/trackerDataImportView.html",
		controller: "trackerDataImportController",
		css: "modules/trackerdataimport/trackerDataImportCss.css"
	});
	$routeProvider.when('/trackerdataexport', {
		templateUrl: "modules/trackerdataexport/trackerDataExportView.html",
		controller: "trackerDataExportController"
	});
	$routeProvider.when('/resetpasswd', {
		templateUrl: "modules/resetpasswd/resetpasswdView.html",
		controller: "resetpasswdController",
		css: "modules/resetpasswd/resetpasswdCss.css"
	});
	$routeProvider.when('/availabledata', {
		templateUrl: "modules/availabledata/availabledataView.html",
		controller: "availabledataController",
		css: "modules/availabledata/availabledataCss.css"
	});
	$routeProvider.when('/hmisadoption', {
		templateUrl: "modules/hmisadoption/hmisadoptionView.html",
		controller: "hmisadoptionController",
		css: "modules/hmisadoption/hmisadoptionCss.css"
	});
	$routeProvider.otherwise({
		redirectTo: '/'
	});

});

appManagerMSF.config(function ($translateProvider, urlApi) {
  
	  $translateProvider.useStaticFilesLoader({
          prefix: 'languages/',
          suffix: '.json'
      });
	  
	  $translateProvider.registerAvailableLanguageKeys(
			    ['es', 'fr', 'en'],
			    {
			        'en*': 'en',
			        'es*': 'es',
					'fr*': 'fr',
			        '*': 'en' // must be last!
			    }
			);
	  
	  $translateProvider.fallbackLanguage(['en']);

	  jQuery.ajax({ url: urlApi + 'userSettings/keyUiLocale/', contentType: 'text/plain', method: 'GET', dataType: 'text', async: false}).done(function (uiLocale) {
		  if (uiLocale == ''){
			  $translateProvider.determinePreferredLanguage();
		  }
		  else{
			  $translateProvider.use(uiLocale);
		  }
      }).fail(function () {
    	  $translateProvider.determinePreferredLanguage();
	  });

});

appManagerMSF.config(function (uibDatepickerConfig) {
	uibDatepickerConfig.startingDay = 1;
});

module.exports = appManagerMSF;