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
        event.preventDefault();
        var serieName = event.target.getElementsByClassName (' serie-name')[0].value;
        confirm('Delete the' + serieName + '?');
    },
})