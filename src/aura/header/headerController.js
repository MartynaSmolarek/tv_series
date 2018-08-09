/**
 * Created by martyna.smolarek on 08.08.2018.
 */
({
    // przycisk do dodawania nowej tv serie
    addNew : function (cmp, event, helper) {
         alert("You clicked: " + event.getSource().get("v.label"));
    },

    // pole do wyszukiwania
    handleKeyUp: function (cmp, evt) {
        var isEnterKey = evt.keyCode === 13;
        if (isEnterKey) {
            var queryTerm = cmp.find('enter-search').get('v.value');
            alert('Searched for "' + queryTerm + '"!');
        }
    },

        /*searchKeyChange: function(component, event) {
                window.location.hash = event.target.value;
        },

        locationChange: function(component, event) {
                var token = event.getParam("token") || "";
        		component.set("v.searchKey", token);
        },

        clearText: function(component) {
                window.location.hash = "";
        }*/
})