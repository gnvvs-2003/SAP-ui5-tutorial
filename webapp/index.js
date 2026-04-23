/**
 * @author : gnvvs-2003
 * @notice This is the entry point of the application.
 */

/// Adding text using sap Text controller

/**
 * @description : This function is used to add text to the application.
 * @param {sap.m.Text} Text - The text to be added to the application.
 * @returns {void} - This function does not return any value.
 * @notice : This text is placed at the id = content (i.e body) directly
 */

sap.ui.define(
    ["sap/m/Text"],(Text)=>{
        "use strict";
        new Text({
            text:"Hello World!!!"
        }).placeAt("content");
    }
)