sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("VF.VizFrameCharts.controller.frame", {
		onInit: function () {
			var oVizFrame = this.getView().byId("idcolumn");

			var oModel = new sap.ui.model.json.JSONModel();

			var data = {
				'Population': [{
					"Year": "2010",
					"Value": "153344445"
				}, {
					"Year": "2011",
					"Value": "531160986"
				}, {
					"Year": "2012",
					"Value": "915105168"
				}, {
					"Year": "2013",
					"Value": "1093786762"
				}, {
					"Year": "2014",
					"Value": "1274018495"
				}, ]

			};

			oModel.setData(data);

			var oDataset = new sap.viz.ui5.data.FlattenedDataset({
				dimension: [{
					name: 'Year',
					value: "{Year}"
				}],

				measures: [{
					name: 'Population',
					value: "{Value}"
				}],

				data: {
					path: "/Population"
				}
			});

			oVizFrame.setDataset(oDataset);
			oVizFrame.setModel(oModel);
			oVizFrame.setVizType('column');

			oVizFrame.setVizProperties({
				plotArea: {

					colorPalette: d3.scale.category20().range()
				}
			});

			var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': 'valueAxis',
					'type': 'Measure',
					'values': ["Population"]

				}),

				feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({

					'uid': "categoryAxis",
					'type': "Dimension",
					'values': ["Year"]
				});

			oVizFrame.addFeed(feedValueAxis);
			oVizFrame.addFeed(feedCategoryAxis);

		}
	});
});