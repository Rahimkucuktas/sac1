sap.ui.define([
    "sap/ui/core/Control",
    "sap/suite/ui/commons/ProcessFlow"
], function(Control, ProcessFlow) {
    "use strict";

    return Control.extend("custom.processflow.scrollable", {
        metadata: {
            properties: {
                "lanes": { type: "array", defaultValue: [] },
                "nodes": { type: "array", defaultValue: [] },
                "theme": { type: "string", defaultValue: "light" }
            },
            events: {
                "nodeClick": {
                    parameters: {
                        "nodeId": { type: "string" }
                    }
                }
            }
        },

        init: function() {
            // Initialization code, if needed
        },

        renderer: function(oRM, oControl) {
            // Render the Process Flow control into the DOM
            oRM.write("<div");
            oRM.writeControlData(oControl);
            oRM.write(">");
            var oProcessFlow = new ProcessFlow({
                lanes: oControl.getLanes(),
                nodes: oControl.getNodes(),
                theme: oControl.getTheme(),
                width: "100%",
                height: "400px"
            });

            // Place the ProcessFlow control inside the custom widget
            oProcessFlow.placeAt(oControl.getId() + "-content");

            oRM.write("</div>");
        },

        // Example of handling the node click event
        _handleNodeClick: function(oEvent) {
            var oNode = oEvent.getParameter("node");
            this.fireNodeClick({
                nodeId: oNode.getId()
            });
        }
    });
});
