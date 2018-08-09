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
    }
})