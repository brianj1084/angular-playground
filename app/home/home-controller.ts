/// <reference path="../_app.ts" />

module app.controllers {
	'use strict';
	
	export class HomeController {
		
		greeting: string;
		
		constructor() {
			this.greeting = "Hello, Brian";
		}
	}
}