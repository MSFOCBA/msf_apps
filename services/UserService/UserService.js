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
var Services = require('./../services.module.js');
require('../../core/dhis2Api');

Services.factory('UserService',['$q', 'meUser', 'User', function($q, meUser, User){
 
    var currentUser;
    
    var currentUserFields = {
        fields: "id,name,userRoles[id,name],userCredentials[username,userRoles[id,name]],userGroups[id,name]" +
            "organisationUnits[id,level,name,children],dataViewOrganisationUnits[id,level,children[id,level,children]]"
    };
    
    function getCurrentUser () {
        if (currentUser != null) {
            return $q.when(currentUser);
        } else {
            return meUser.get(currentUserFields).$promise.then(function(me){
                currentUser = me;
                return currentUser;
            });
        }
    }
    
    function getCurrentUserOrgunits () {
        return getCurrentUser()
            .then(function (me) {
                return me.organisationUnits;
            });
    }

    /**
     * It returns a promise that resolves to a boolean indicating if current user has the group or not
     * @param groupName Group name to evaluate
     */
    function currentUserHasGroup (groupName) {
        return getCurrentUser().then(function(me) {
            var hasGroup = false;
            angular.forEach(me.userGroups, function (userGroup) {
                hasGroup = userGroup.name === groupName ? true : hasGroup;
            });
            return hasGroup;
        });
    }

    /**
     * It returns a promise that resolves to a boolean indicating if current user has the role or not
     * @param roleName Role name to evaluate
     */
    function currentUserHasRole (roleName) {
        return getCurrentUser().then(function(me) {
            var hasRole = false;
            angular.forEach(me.userCredentials.userRoles, function (userRole) {
                hasRole = userRole.name === roleName ? true : hasRole;
            });
            return hasRole;
        });
    }
    
    /**
     * It returns a promise that resolves to a list of users associated to a project and its health sites
     * @param project Orgunit object
     */
    function getProjectUsers (project) {
        var childrenIds = project.children.map(function(child){
            return child.id;
        });

        var projectFilter = {
            "filter": "organisationUnits.id:in:[" + [project.id].concat(childrenIds).toString() + "]"
        };

        return User.get(projectFilter).$promise.then(function(projectUsers){
            return projectUsers.users;
        });
    }
    
    function updateUserPassword(user, password) {
        user.userCredentials.password = password;
        return User.put({iduser:user.id}, user).$promise;
    }
    
    return {
        currentUserHasGroup: currentUserHasGroup,
        currentUserHasRole: currentUserHasRole,
        getCurrentUser: getCurrentUser,
        getCurrentUserOrgunits: getCurrentUserOrgunits,
        getProjectUsers: getProjectUsers,
        updateUserPassword: updateUserPassword
    }
    
}]);