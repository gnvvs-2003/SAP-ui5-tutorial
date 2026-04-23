/**
 * @author : gnvvs-2003
 * @notice This is the entry point of the application.
 */

/// Connecting App.view.xml for Text 

/**
 * @description : This function is used to add text to the application by connecting App.view.xml file  
 * @param {sap.ui.core.mvc.XMLView} XMLView - The XMLView to be added to the application.
 * @returns {void} - This function does not return any value.
 * @notice : This text is placed at the id = content (i.e body) directly
 */

sap.ui.define(
    ["sap/ui/core/mvc/XMLView"],(XMLView)=>{
        "use strict";
        new XMLView.create({
            viewName:"ui5.walkthrough.view.App" // The name will be (ui5/walkthrough)(name space)/view/App....
        }).then((oView)=>{
            oView.placeAt("content"); // id = content (body)
        });
    }
)