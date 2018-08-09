/**
 * Created by martyna.smolarek on 08.08.2018.
 */
({
    getName: function (component, event, helper) {
            /*var action = component.get('c.getNameOfSerie');

            action.setCallback(this, function(response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    var name = component.get("v.tvSerie");
                    component.set("v.tvSerie.Name", name );
                }
                else {
                    console.log("error");
                }
            });
            $A.enqueueAction(action);*/



    },

    viewSeasons: function (component, event, helper) {
        component.set("v.hideSeason", false);
    },

    modify: function (component, event, helper) {
        console.log("modyfikuj");
    }
})