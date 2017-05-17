require('../core/dhis2Api');
require('../services/services.module');

var directives = angular.module('Directives', ['Dhis2Api', 'Services']);

module.exports = directives;