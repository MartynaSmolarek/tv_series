/**
 * Created by martyna.smolarek on 16.08.2018.
 */
({
    createSerie: function(component, serie) {
        var theSeries= component.get("v.series");
        console.log("theSeries: ", theSeries);

        var newSerie = JSON.parse(JSON.stringify(serie));
        console.log("newSerie:", newSerie);

        theSeries.push(newSerie);

        component.set("v.series", theSeries);
        console.log("theSeries:", theSeries);

        component.set("v.hideAll", false);
    }
})
