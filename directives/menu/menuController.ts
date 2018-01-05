
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

import { UserService } from '../../services/services.module';
import { CommonVariable } from '../../model/model';

export class MenuComponent implements ng.IComponentOptions {
    public controller: any;
    public template: string;

    constructor() {
        this.controller = MenuController;
        this.template = require('./menuView.html');
    }
}

class MenuController {
    
    static $inject = ['commonvariable', 'UserService'];

	isOnline: boolean;
	isAdministrator: boolean = false;

    constructor(private commonvariable: CommonVariable, private UserService: UserService) {
        this.isOnline = this.commonvariable.isOnline;
		this.UserService.getCurrentUser().then( me => {
			this.isAdministrator = me.userGroups.some( userGroup => userGroup.name === 'Administrators' );
		});
    }
}