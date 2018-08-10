/**
 * Created by martyna.smolarek on 07.08.2018.
 */
({
    doInit: function (component, event, helper) {
        console.log("ide do helpera main");
        helper.getSeries (component);
    },

    handleComponentEvent: function(component, event) {
        var info = event.getParam("infoName");
        component.set("v.serie", info);

        console.log(info);

     },

})