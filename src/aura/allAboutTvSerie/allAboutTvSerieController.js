/**
 * Created by martyna.smolarek on 09.08.2018.
 */
({
     // przycisk do otworzenia strony konkretnego serialu
    viewSerie : function (component, event, helper) {
        // tu ukrywa mi sie sekcja pierwsza i otwiera nowa
        console.log("dfdf");
        component.set("v.hideSerie", false);

        /*var name = event.getSource().get("v.serie.Name");
        console.log(name);*/
        //component.get("v.serie.Name");

        var name = event.getSource().get("v.value");
                console.log(name);
    },

    // przycisk do usuwania tv serie
    deleteSerie: function (component, event, helper) {
        event.preventDefault();
        var serieName = event.target.getElementsByClassName (' serie-name')[0].value;
        confirm('Delete the' + serieName + '?');
    },
})