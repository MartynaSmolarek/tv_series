/**
 * Created by martyna.smolarek on 07.08.2018.
 */
({
    getSeries: function(component) {
        var action = component.get('c.getMyObjects');
        // Set up the callback
        action.setCallback(this, function(actionResult) {
        component.set('v.series', actionResult.getReturnValue());
        });
        $A.enqueueAction(action);
    },
//////////////////////////////////////////////////////////////////////////////////////////
/*

saveSer: function(component, newSerie, callback) {
           console.log("jestem w saveSerie");
                  var action = component.get("c.newItem");
                  //console.log(action);
                  action.setParams({"s" : newSerie});

                  action.setCallback(this, function(response) {
                      var state = response.getState();
                      if (state === "SUCCESS") {
                          var series = component.get("v.series");
                          console.log("series:", series);
                          var items = [] ;

                          // lece po calej liscie, zeby zobaczyc, ktory tv serie usuwam i wyswietlam liste wszystkich tv serie oprocz usunietego
                          for (i=0; i<series.length; i++) {

                                  items.push(series[i]);

                          }
                          component.set("v.series", items);
                          console.log(items);
                      }
                  });
                  $A.enqueueAction(action);
      },
*/


})