/**
 * Created by martyna.smolarek on 09.08.2018.
 */
({
    viewEpisodesEvent: function(component, event, helper) {

        var seasonEvent = component.getEvent("seasonEvent");
        seasonEvent.setParams({"infoSeason" : component.get("v.oneSeason")});
        console.log("co jest w v.oneSeason? ", component.get("v.oneSeason"));
        seasonEvent.fire();

        component.set("v.hideEpisode", false);
        console.log("pokazuje epizody");

        helper.episodeGet(component);


    },




})