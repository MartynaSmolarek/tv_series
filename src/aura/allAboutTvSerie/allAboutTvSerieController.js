/**
 * Created by martyna.smolarek on 09.08.2018.
 */
({
     // przycisk do otworzenia strony konkretnego serialu
    viewSerieEvent : function (component, event, helper) {
        // tu ukrywa mi sie sekcja pierwsza i otwiera nowa
        component.set("v.hideSerie", false);

        var cmpEvent = component.getEvent("cmpEvent");
        // tu musi byc co robi event?
        cmpEvent.setParams({"infoName" : component.get("v.serie")});
        cmpEvent.fire();
    },

    // przycisk do usuwania tv serie
    deleteSerie: function (component, event, helper) {
        console.log("jestem w deleteSerie allAbout.. controller");
        var tvSerie = component.get("v.serie");
        console.log("tvSerie:", tvSerie);
        var delEvent = component.getEvent("deleteSerieEvent");
        console.log(delEvent); // tu jest jakis obiekt N(?)
        if(confirm('Delete the ' + tvSerie.Name + '?'))
           delEvent.setParams({"serieToDel" : tvSerie}).fire();
    },
})