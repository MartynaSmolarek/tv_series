/**
 * Created by martyna.smolarek on 08.08.2018.
 */
({
    getSeason: function(component) {
        var action2 = component.get('c.getSeasons');
        action2.setParam("tv_serie_id", component.get("v.serie").Id);
        console.log("jestem w seasonsGet() w seasonContoller.js");

        action2.setCallback (this, function(response) {
            //var name = component.get("v.numOfSeason")
            component.set("v.numOfSeason", response.getReturnValue());
            var value = response.getReturnValue();

        });
        $A.enqueueAction(action2);

    },
})