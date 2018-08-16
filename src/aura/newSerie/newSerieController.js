/**
 * Created by martyna.smolarek on 16.08.2018.
 */
({
    clickCreate: function(component, event, helper) {

        var validSerie = component.find('serieform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validSerie){
            // Create the new serie
            var newSerie = component.get("v.newSerie");
            console.log("Create serie: " + JSON.stringify(newSerie));
            helper.createSerie(component, newSerie);


                        /*var action = component.get("c.saveContacts");
                        action.setParams({
                            "series": component.get("v.contactList")
                        });
                        // set call back
                        action.setCallback(this, function(response) {
                            var state = response.getState();
                            if (state === "SUCCESS") {
                                // if response if success then reset/blank the 'contactList' Attribute
                                // and call the common helper method for create a default Object Data to Contact List
                                component.set("v.contactList", []);
                                helper.createObjectData(component, event);
                                alert('record Save');
                            }
                        });
                        // enqueue the server side action
                        $A.enqueueAction(action);*/
        }

    }
})
