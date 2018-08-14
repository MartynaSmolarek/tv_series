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

    handleComponentEvent: function (component, event) {
        var inf = event.getParam("infoSeason");
        console.log("wyswietlam inf z serieController: ",inf);

        component.set("v.oneSeason", inf);
    },


    viewSeasons: function (component, event, helper) {
        component.set("v.hideSeason", false);
        helper.getSeason(component);
    },

    modify: function (component, event, helper) {
        console.log("modyfikuj");

    }
})