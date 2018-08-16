/**
 * Created by martyna.smolarek on 08.08.2018.
 */
({
    deleteSer: function(component, tvSerie, callback) {
        console.log("jestem w deleteSerie parent");
        var action = component.get("c.deleteTvSerieById");
        //console.log(action);
        action.setParams({"tvSerie_id" : tvSerie.Id});
        console.log("id:", tvSerie.Id);

        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var series = component.get("v.series");
                console.log("series:", series);
                var items = [] ;

                // lece po calej liscie, zeby zobaczyc, ktory tv serie usuwam i wyswietlam liste wszystkich tv serie oprocz usunietego
                for (i=0; i<series.length; i++) {
                    if (series[i].Id !== tvSerie.Id) {
                        console.log(series[i].Id);
                        items.push(series[i]);
                    }
                }
                component.set("v.series", items);
            }
        });
        $A.enqueueAction(action);
    },


})