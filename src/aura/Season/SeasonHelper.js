/**
 * Created by martyna.smolarek on 13.08.2018.
 */
({
 episodeGet: function (component) {

    var action2 = component.get('c.getEpisodes');
            var val = component.get("v.oneSeason").Id;
            console.log("zwracam wartosc oneSeason.id", val);
            action2.setParam("season_id", component.get("v.oneSeason").Id);

            action2.setCallback (this, function(response) {
                //var name = component.get("v.numOfSeason")
                component.set("v.numOfEpisodes", response.getReturnValue());
                var value = response.getReturnValue();
                console.log("zwracam value z numOfEpisodes", value);

            });
            $A.enqueueAction(action2);
    },
})