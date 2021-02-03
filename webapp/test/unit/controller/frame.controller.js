/*global QUnit*/

sap.ui.define([
	"VF/VizFrameCharts/controller/frame.controller"
], function (Controller) {
	"use strict";

	QUnit.module("frame Controller");

	QUnit.test("I should test the frame controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});