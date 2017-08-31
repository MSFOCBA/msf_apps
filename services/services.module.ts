import * as angular from 'angular';

require('../core/dhis2Api');

import { AnalyticsService } from './analytics/AnalyticsService';
var dataImportService = require('./data/DataImportService');
var demographicsService = require('./demographics/DemographicsService');
var dataStoreService = require('./data-store/DataStoreService');
var userdataStoreService = require('./data-store/userDataStoreService');
import { EventExportService } from './events/EventExportService';
import { EventHelper } from './events/EventHelper';
import { EventImportService } from './events/EventImportService';
var metadataImportService = require('./metadata/MetadataImportService');
var metadataSyncService = require('./metadata/MetadataSyncService');
import { orgunitGroupSetService } from './orgunits/OrgunitGroupSetService';
import { SystemService } from './system/SystemService';
var programsService = require('./programs/ProgramService');
var remoteApiService = require('./metadata/RemoteApiService');
var sqlService = require('./sql/SqlService');
var userService = require('./users/UserService');

export const servicesModule = angular.module('Services', ['Dhis2Api'])
    .service('AnalyticsService', AnalyticsService)
    .factory('DataImportService', dataImportService)
    .factory('DemographicsService', demographicsService)
    .factory('DataStoreService', dataStoreService)
    .factory('userDataStoreService', userdataStoreService)
    .service('EventExportService', EventExportService)
    .service('EventHelper', EventHelper)
    .service('EventImportService', EventImportService)
    .factory('MetadataImportService', metadataImportService)
    .factory('MetadataSyncService', metadataSyncService)
    .factory('OrgunitGroupSetService', orgunitGroupSetService)
    .service('SystemService', SystemService)
    .factory('ProgramService', programsService)
    .factory('RemoteApiService', remoteApiService)
    .factory('sqlService', sqlService)
    .factory('UserService', userService);

export {
    AnalyticsService,
    EventExportService,
    EventHelper,
    EventImportService,
    orgunitGroupSetService,
    SystemService
}